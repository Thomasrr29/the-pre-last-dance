import { IsArray, IsNotEmpty, IsString } from "class-validator"


export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    last_name: string

    @IsString()
    @IsNotEmpty()
    cellphone: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsArray()
    @IsNotEmpty()
    events: string 
    

}
