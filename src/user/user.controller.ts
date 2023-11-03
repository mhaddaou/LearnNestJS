import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController{
    @Get()
    retAll() : string[]{
        return ['mohamed', 'haddaoui', 'nice'];
    }

    @Post()
    createUser() : string{
        return 'create user';
    }
}