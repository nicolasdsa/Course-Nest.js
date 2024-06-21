import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  /*
  The `private readonly` keywords indicate that parameter is a private property of the class and cannot be modified from outside the class.
In TypeScript, a constructor is a special method that is automatically called when an object of a class is created. It is used to initialize the properties of the class and perform any necessary setup.
In this case, the constructor is used to inject an instance of the  class into the `UsersController` class. Dependency injection is a design pattern commonly used in software development to achieve loose coupling between classes. By injecting the  instance into the `UsersController`, the controller can access the functionality provided by the service.
The `private readonly` modifier before the [`usersService`] parameter ensures that the  property is only accessible within the `UsersController` class and cannot be modified from outside. This is a common practice to enforce encapsulation and prevent unintended modifications to the property.
By passing the [`usersService`]instance to the constructor, the `UsersController` class can use the methods and properties provided by the [`UsersService`] class to perform operations related to users. This allows for better organization and separation of concerns in the codebase.
Overall, the constructor in this code snippet is responsible for injecting the [`UsersService`] instance into the `UsersController` class, enabling the controller to utilize the functionality provided by the service.
  */
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
