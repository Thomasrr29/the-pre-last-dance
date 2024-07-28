import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsDefined, IsHash, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator"


export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'The name of the user', example: "Johnsito", required: true})
    name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: "The last name of the user", example: "Velasquez", required: true})
    last_name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: "The cellphone user", example: "3156457654", required: true})
    cellphone: string

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    @ApiProperty({description: 'The user email', example: "Jhon@gmail.com", required: true})
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 30)
    @ApiProperty({description: "The password user, should have minimun 8 characters", required: true})
    password: string

    @IsArray()
    @IsNotEmpty()
    @IsOptional()
    events: any[]
    

}
