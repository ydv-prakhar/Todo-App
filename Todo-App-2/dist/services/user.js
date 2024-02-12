"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.addTodo = exports.getTasks = exports.signUser = exports.removeUser = exports.getUsers = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const User_1 = require("../entities/User");
const Todos_1 = require("../entities/Todos");
const getUsers = async (req, res, next) => {
    const userRepository = data_source_1.default.getRepository(User_1.User);
    const consoleUsers = await userRepository.find({
        relations: {
            todos: true
        }
    });
    console.log(consoleUsers);
    const allUser = await userRepository.createQueryBuilder('user').select(['user.id', 'user.username', 'user.email']).getMany();
    return res.status(200).json({ allUser });
};
exports.getUsers = getUsers;
const removeUser = async (req, res, next) => {
    const id = req.params.userId;
    const userRepository = data_source_1.default.getRepository(User_1.User);
    try {
        await userRepository.delete(id);
    }
    catch (err) {
        console.log(err);
        return res("Something went wrong");
    }
    return res.status(200).json("User deleted sucessfully");
};
exports.removeUser = removeUser;
const signUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = new User_1.User();
    user.username = name;
    user.email = email;
    user.password = password;
    const userRepository = data_source_1.default.getRepository(User_1.User);
    try {
        await userRepository.save(user);
    }
    catch (err) {
        console.log(err);
        return res.send("User with the given email already exists");
    }
    return res.status(400).json({ user });
};
exports.signUser = signUser;
const getTasks = async (req, res, next) => {
    const todoRepository = data_source_1.default.getRepository(Todos_1.Todos);
    const userRepository = data_source_1.default.getRepository(User_1.User);
    const user = await userRepository.findOneBy({
        id: req.params.userId
    });
    const allTasks = await todoRepository.find({
        where: {
            user: user
        },
        relations: {
            user: true
        }
    });
    return res.status(200).json({ allTasks });
    // const allTasks = await todoRepository.createQueryBuilder('tasks').where('tasks.user.id = req.params.userId').getMany()
    return res.status(200).json({ allTasks });
};
exports.getTasks = getTasks;
const addTodo = async (req, res, next) => {
    const userRepository = data_source_1.default.getRepository(User_1.User);
    const user = await userRepository.findOneBy({
        id: req.params.userId
    });
    const { task, status } = req.body;
    const todo = new Todos_1.Todos();
    todo.task = task;
    todo.status = status;
    todo.user = user;
    const todoRepository = data_source_1.default.getRepository(Todos_1.Todos);
    try {
        await todoRepository.save(todo);
    }
    catch (err) {
        console.log(err);
        return res.send("User doesn't exist");
    }
    return res.status(200).json({ todo });
};
exports.addTodo = addTodo;
const deleteTodo = async (req, res, next) => {
    const todoRepository = data_source_1.default.getRepository(Todos_1.Todos);
    try {
        await todoRepository.delete(req.params.todoId);
    }
    catch (err) {
        console.log(err);
        return res("Something went wrong");
    }
    return res.status(200).json("Task deleted sucessfully");
};
exports.deleteTodo = deleteTodo;
exports.default = exports.getUsers;
//# sourceMappingURL=user.js.map