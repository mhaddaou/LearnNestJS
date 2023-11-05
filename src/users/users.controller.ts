import { Body, Controller, Get, Param, Post, Patch, Delete, ParseUUIDPipe, ValidationPipe, UsePipes, Query } from "@nestjs/common";
import { UsersEntity } from "./dtos/users.Entity";
import {v4 as uid} from 'uuid'
import { CreateUsersDto } from "./dtos/create-users.dto";
import {UpdateUsersDto} from './dtos/update-users.dto'
import { CustomeValidationPipe } from "./pipes/validation.pipe";
import {UsersService} from './users.service'
@Controller('users')
export class UserController{
    constructor(
        private readonly userService : UsersService,
    ){}

    
    //find all users
    @Get()
    findAll(){
        return this.userService.findUsers();
    }

    

    //find one user by id
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id : string) : UsersEntity{
        return this.userService.findUserById(id);
    }

    //create user
    @Post()
    create(@Body() userData : CreateUsersDto) : UsersEntity{
        return this.userService.createUser(userData);
    }

    //update user
    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id : string, @Body() userData : UpdateUsersDto) : UsersEntity{
        return this.userService.updateUser(id, userData);
    }

    //delete user
    @Delete(':id')
    delete(@Param('id') id : string){
        return this.userService.deleteUser(id);
    }
}