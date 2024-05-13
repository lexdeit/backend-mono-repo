import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    ParseIntPipe,
    Delete,
    Patch
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @Post()
    createUser(@Body() newUser: CreateUserDto): Promise<User> {
        return this.usersService.createUser(newUser);
    }

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(":id")
    getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.usersService.getUserById(id);
    }

    @Get("email")
    getUserByEmail(@Param("email") email: string): Promise<User> {
        return this.usersService.getUserByEmail(email);
    }

    @Delete(":id")
    deleteUserById(@Param("id", ParseIntPipe) id: number): Promise<User> {
        return this.usersService.deleteUserById(id);
    }


    @Patch(":id")
    updateUserById(@Param("id", ParseIntPipe) id: number, @Body() userData: UpdateUserDto) {
        return this.usersService.updateUserById(id, userData)
    }



}
