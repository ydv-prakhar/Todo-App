"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Todos_1 = require("./entities/Todos");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "Test",
    entities: [User_1.User, Todos_1.Todos],
    synchronize: true,
    logging: false,
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map