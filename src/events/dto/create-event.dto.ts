import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator"
import { Events } from "../entities/event.entity"
import { User } from "src/users/entities/user.entity"

export class CreateEventDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsDate()
    @IsNotEmpty()
    hour: Date

    @IsArray()
    @IsNotEmpty()
    users: [User]

    @IsString()
    @IsNotEmpty()
    person: string

    @IsString()
    @IsNotEmpty()
    ubication: String

    @IsString()
    @IsNotEmpty()
    price: string

}
