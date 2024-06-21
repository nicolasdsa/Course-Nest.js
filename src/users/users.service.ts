import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll() {
    return this.databaseService.user.findMany();
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }

  findOneByUsername(username: string) {
    return this.databaseService.user.findFirst({
      where: {
        username,
      },
    });
  }

  create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  delete(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
