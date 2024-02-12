import * as userServices from '../services/user.js'
export const getAllUser = (req,res,next)=>{
    return userServices.getUsers(req,res,next)
}

export const signupUser = (req,res,next)=>{
    return userServices.signUser(req,res,next)


}
export const deleteUser = (req,res,next)=>{
    return userServices.removeUser(req,res,next)
}

export const getAllTasks = (req,res,next)=>{
    return userServices.getTasks(req,res,next)
}

export const addTask = (req,res,next)=>{
    return userServices.addTodo(req,res,next)
}

export const deleteTask = (req,res,next)=>{
    return userServices.deleteTodo(req,res,next)
}