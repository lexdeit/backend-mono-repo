import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(user: CreateUserDto) {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    getUsers() {
        return this.userRepository.find();
    }

    getUserById(id: number) {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        })
    }

    getUserByEmail(email: string) {
        return this.userRepository.findOne({
            where: {
                email: email
            }
        })
    }

    deleteUserById(id: number) {


        const userFound = this.userRepository.findOne({
            where: {
                id
            }
        })

        if (userFound) {
            this.userRepository.delete({ id })
            return userFound;
        } else {
            return;
        }


    }

    updateUserById(id: number, user: UpdateUserDto) {
        return this.userRepository.update({ id }, user)
    }


}
