import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsername(username);

    // Use bcrypt.compare to check if the passwords match
    const isMatch = await bcrypt.compare(pass, user?.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    // Check if the user already exists
    const userExists = await this.usersService.findOneByUsername(username);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    // Hash the password
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(pass, saltOrRounds);

    // Create the user with the hashed password
    const newUser = await this.usersService.create({
      username,
      password: hashedPassword, // Use the hashed password here
    });

    // Generate token
    const payload = { sub: newUser.id, username: newUser.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
