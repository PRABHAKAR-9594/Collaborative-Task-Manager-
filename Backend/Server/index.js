import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { TaskRoute } from '../routes/taskRoute.js';
import { DBconnection } from '../DB/db.js';
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
const port =process.env.PORT

// Database 
DBconnection()

//Routes
TaskRoute(app)
app.listen(port,()=>{
console.log(`Server Runnig on the port ${port} `);

})