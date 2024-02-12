import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

export enum TaskStatus{
    done = "Done",
    not_done = "Not Done"
}

@Entity()
export class Todos {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    task: string

    @Column({
        type:"enum",
        enum: TaskStatus
    })
    status: string

   @ManyToOne(
    ()=>User,
    user=>user.todos

   )
   user: User


}
