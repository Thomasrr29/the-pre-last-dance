import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { User } from 'src/users/entities/user.entity'

@Schema()
export class Events {

    @Prop()
    name: string

    @Prop()
    hour: Date

    @Prop()
    users: User[]

    @Prop()
    person: string

    @Prop()
    ubication: String

    @Prop()
    price: string
}


export const eventSchema = SchemaFactory.createForClass(Events)
