"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.addTask = exports.getAllTasks = exports.deleteUser = exports.signupUser = exports.getAllUser = void 0;
const userServices = __importStar(require("../services/user.js"));
const getAllUser = (req, res, next) => {
    return userServices.getUsers(req, res, next);
};
exports.getAllUser = getAllUser;
const signupUser = (req, res, next) => {
    return userServices.signUser(req, res, next);
};
exports.signupUser = signupUser;
const deleteUser = (req, res, next) => {
    return userServices.removeUser(req, res, next);
};
exports.deleteUser = deleteUser;
const getAllTasks = (req, res, next) => {
    return userServices.getTasks(req, res, next);
};
exports.getAllTasks = getAllTasks;
const addTask = (req, res, next) => {
    return userServices.addTodo(req, res, next);
};
exports.addTask = addTask;
const deleteTask = (req, res, next) => {
    return userServices.deleteTodo(req, res, next);
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=user.js.map