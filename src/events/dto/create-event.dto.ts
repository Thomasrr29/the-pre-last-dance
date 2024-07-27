import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator"
import { Event } from "../entities/event.entity"

export class CreateEventDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsDate()
    @IsNotEmpty()
    hour: Date

    @IsArray()
    @IsNotEmpty()
    users: [Event]

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
