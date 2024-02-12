import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Todos } from "./Todos"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column({unique:true})
    email: string

    @Column()
    password: string

    @OneToMany(
        () => Todos,
        todos => todos.user
        )
        todos: Todos

}
