import { IsArray, IsDefined, IsHash, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator"


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
    @IsDefined()
    @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 30)
    password: string

    @IsArray()
    @IsNotEmpty()
    @IsOptional()
    events: any[]
    

}
