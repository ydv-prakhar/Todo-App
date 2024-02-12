import express from 'express'
const app = express()
import userRouter from './routes/user.js'
import AppDataSource from './data-source.js'

AppDataSource.initialize()
    .then(() => {
        console.log("The DB connection has been sucessfully established")
    })
    .catch((error) => console.log(error))

app.use(express.json())

app.use('/api/user',userRouter)
app.listen(3000,(req,res)=>{
    console.log("server up and running on port 3000")
})