import { User } from 'src/users/entities/user.entity'
import {Column, PrimaryGeneratedColumn, ManyToMany, Entity, JoinTable} from 'typeorm'

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    hour: Date

    @ManyToMany(() => User)
    @JoinTable()
    users: string

    @Column()
    person: string

    @Column()
    ubication: String

    @Column()
    price: string
}
