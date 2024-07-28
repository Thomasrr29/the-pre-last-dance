import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator"
import { Events } from "../entities/event.entity"
import { User } from "src/users/entities/user.entity"
import { ApiProperty } from "@nestjs/swagger"

export class CreateEventDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'The name of the user', example: "Johnsito", required: true})
    name: string

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({description: "The date of the event for register", example: "2023-08-15T12:00:00Z", required: true})
    hour: Date

    @IsArray()
    @IsNotEmpty()
    users: [User]

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: "The hosters of the event, the protagonists", example: "Morat", required: true})
    person: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: "The direction for come to event", example: "Medellin-Atanasio Girardot", required: true})
    ubication: String

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:"The event price", example: "159.900", required: true})
    price: string

}
