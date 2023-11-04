import { IsEmail, IsString, Length } from "class-validator";

export class CreateUsersDto{

    @Length(3,20)
    @IsString()
    readonly firstname : string;
    
    @IsString()
    @Length(3,20)
    readonly lastname : string;
    
    @IsString()
    @IsEmail()
    readonly email : string;
    
    @IsString()
    readonly password : string;
}