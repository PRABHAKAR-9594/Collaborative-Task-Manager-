 import { createTask, updateTask } from "../controller/taskcontroller.js"
 import { getTask } from "../controller/taskcontroller.js"
 import { deleteTask } from "../controller/taskcontroller.js"
 export const TaskRoute=(app)=>{
    app.post('/api/createTask',createTask)
    app.get('/api/',getTask)
    app.put('/api/updatetask/:id',updateTask)
    app.delete('/api/deletetask/:id',deleteTask)


 }