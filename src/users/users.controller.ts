import { Body, Controller, Get, Param, Post, Patch, Delete } from "@nestjs/common";
import { UsersEntity } from "./dtos/users.Entity";
import {v4 as uid} from 'uuid'
import { CreateUsersDto } from "./dtos/create-users.dto";
import {UpdateUsersDto} from './dtos/update-users.dto'
@Controller('users')

export class UserController{
    private users : UsersEntity[] = [];

    //find all users
    @Get()
    find() : UsersEntity[]{
        return this.users;
    }

    //find one user by id
    @Get(':id')
    findOne(@Param('id') id : string) : UsersEntity{
        return this.users.find((user : UsersEntity) => user.id === id);
    }

    //create user
    @Post()
    create(@Body() userData : CreateUsersDto) : UsersEntity{
        const newUser = {
            ...userData,
            id : uid(),
        }
        this.users.push(newUser);
        return newUser;
    }

    //update user
    @Patch(':id')
    update(@Param('id') id : string, @Body() userData : UpdateUsersDto) : UsersEntity{
        const index = this.users.findIndex((user : UsersEntity) => user.id === id);
        this.users[index] = {...this.users[index], ...userData};
        return this.users[index];
    }

    //delete user
    @Delete(':id')
    delete(@Param('id') id : string){
        this.users = this.users.filter((user : UsersEntity) => user.id !== id);
    }
}