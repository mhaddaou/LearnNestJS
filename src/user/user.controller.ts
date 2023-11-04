import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController{
    @Get()
    find() : string[]{
        return ['mohamed', 'haddaoui', 'nice'];
    }

    @Get(":username")
    findOne(@Param('username') username : string) : string{
        return `hello ${username}`
    }

    @Post()
    create(@Body() createUserDto  : CreateUserDto) : CreateUserDto{
        console.log(createUserDto);
        return createUserDto;
    }

    @Patch(":username")
    update(@Param("username") username : UpdateUserDto) {
        return username.firstname;
    }

    @Delete(":username")
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("username") username : string) : string{
        return username;
    }
}