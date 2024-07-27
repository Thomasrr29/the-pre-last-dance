import {PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable} from 'typeorm'
import { Event } from 'src/events/entities/event.entity'
//

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    last_name: string

    @Column()
    cellphone: string

    @Column()
    email: string

    @ManyToMany(() => Event)
    @JoinTable()
    events: string 
    
}
