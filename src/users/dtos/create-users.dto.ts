import { IsEmail, IsString, Length } from "class-validator";
import { CustomeValidationPipe } from "../pipes/validation.pipe";


export class CreateUsersDto{

    @IsString()
    @Length(3,20)
    readonly firstname : string;
    
    @IsString()
    @Length(3,20)
    readonly lastname : string;
    
    @IsString()
    @IsEmail({}, {message: "incorrect email address"})
    readonly email : string;
    
    @IsString()
    readonly password : string;
}