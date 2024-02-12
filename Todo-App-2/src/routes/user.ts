import express from 'express'
const router = express.Router()
import * as userController from '../controllers/user.js'


router.get('/',userController.getAllUser)
router.post('/signup',userController.signupUser)
router.delete('/:userId',userController.deleteUser)
router.get('/:userId/todos', userController.getAllTasks)
router.post('/:userId/todos/add', userController.addTask)
router.delete('/:userId/todos/remove/:todoId', userController.deleteTask)

export default router