import {Injectable, Param, ParseUUIDPipe, Body} from '@nestjs/common'
import { UsersEntity } from './dtos/users.Entity';
import {v4 as uid} from 'uuid';
import { CreateUsersDto } from "./dtos/create-users.dto";
import {UpdateUsersDto} from './dtos/update-users.dto'

@Injectable()
export class UsersService{
    private users : UsersEntity[] = [];

    findUsers() : UsersEntity[]{
        return this.users;
    }

    findUserById(@Param('id', ParseUUIDPipe) id : string) : UsersEntity{
        return this.users.find((user: UsersEntity) => user.id === id)
    }

    createUser(@Body() userData : CreateUsersDto) : UsersEntity{
        const newUser = {
            ...userData,
            id : uid(),
        }
        this.users.push(newUser);
        return newUser;
    }

    updateUser(@Param('id') id : string, @Body() userData : UpdateUsersDto) : UsersEntity{
        const index = this.users.findIndex((user : UsersEntity) => user.id === id);
        this.users[index] = {...this.users[index], ...userData};
        return this.users[index];
    }

    deleteUser(@Param('id') id : string) : void{
        this.users = this.users.filter((user : UsersEntity) => user.id !== id);
    }

}