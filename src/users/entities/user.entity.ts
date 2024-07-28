import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Events } from 'src/events/entities/event.entity'


@Schema()
export class User {


    @Prop()
    name: string

    @Prop()
    last_name: string

    @Prop()
    cellphone: string

    @Prop()
    email: string

    @Prop()
    password: string

    @Prop()
    events: Events[] 
    
}



export const userSchema = SchemaFactory.createForClass(User); 
