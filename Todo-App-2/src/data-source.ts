import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Todos } from "./entities/Todos"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "Test",
    entities: [User,Todos],
    synchronize: true,
    logging: false,
})


export default AppDataSource