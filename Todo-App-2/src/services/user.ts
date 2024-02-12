import AppDataSource from "../data-source"
import { User } from "../entities/User"
import { Todos } from "../entities/Todos"

export const getUsers = async (req,res,next)=>{
    const userRepository = AppDataSource.getRepository(User)
    const consoleUsers = await userRepository.find({
        relations:{
            todos:true
        }
    })
    console.log(consoleUsers)
    const allUser = await userRepository.createQueryBuilder('user').select(['user.id','user.username','user.email']).getMany()
    return res.status(200).json({allUser})
}

export const removeUser = async(req,res,next)=>{
    const id = req.params.userId
    const userRepository = AppDataSource.getRepository(User)
    try {
        await userRepository.delete(id)
    }
    catch(err){
        console.log(err)
        return res("Something went wrong")
    }
    return res.status(200).json("User deleted sucessfully")


}

export const signUser = async (req,res,next)=>{
    const {name,email,password} = req.body
    const user = new User()
    user.username = name
    user.email = email
    user.password =  password
    
    const userRepository = AppDataSource.getRepository(User)
    try{
        await userRepository.save(user)
    }
    catch(err){
        console.log(err)
        return res.send("User with the given email already exists")

    }


    return res.status(400).json({user})


}



export const getTasks = async (req,res,next)=>{
    const todoRepository = AppDataSource.getRepository(Todos)
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({
        id: req.params.userId
    })
    const allTasks = await todoRepository.find({
        where:{
            user:user
        },
        relations:{
            user:true
        }
    })
    return res.status(200).json({allTasks})
    // const allTasks = await todoRepository.createQueryBuilder('tasks').where('tasks.user.id = req.params.userId').getMany()
    return res.status(200).json({allTasks})
}


export const addTodo = async (req,res,next)=>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({
        id: req.params.userId
    })
    const {task,status} = req.body
    const todo = new Todos()
    todo.task = task
    todo.status = status
    todo.user = user
    
    const todoRepository = AppDataSource.getRepository(Todos)
    try{
        await todoRepository.save(todo)
    }
    catch(err){
        console.log(err)
        return res.send("User doesn't exist")

    }
    return res.status(200).json({todo})

}

export const deleteTodo = async (req,res,next)=>{
    const todoRepository = AppDataSource.getRepository(Todos)

    try {
        await todoRepository.delete(req.params.todoId)
    }
    catch(err){
        console.log(err)
        return res("Something went wrong")
    }
    return res.status(200).json("Task deleted sucessfully")
    


}
export default getUsers