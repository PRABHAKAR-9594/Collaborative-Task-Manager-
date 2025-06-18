// For creating the new task 
import { taskmodel } from "../models/taskModel.js"
export const createTask = async (req, res) => {
    try {
        const task = req.body
        const createdTask = await taskmodel.create({ ...task })
        res.status(201).send({ "Message": "Task Created Successfully !", createdTask })
    }
    catch (error) {
        res.status(500).send({ "Message": "Something went worng !" })
        console.log(error);
    }

}

//for getting the task 

export const getTask = async (req, res) => {

    const { status, assignto } = req.query;
    const filter = {}
    if (status) filter.status = status
    if (assignto) filter.assignto = assignto

    try {
        const Task = await taskmodel.find(filter)
        res.status(200).send(Task)
    }
    catch (error) {
        res.status(500).send({ "Message": "Something went wrong while geeting the task !" })
        console.log(error);
    }

}


// For updating the task 


export const updateTask=  async (req,res)=>{
try{
    const id =req.params.id
    const updateTask=await taskmodel.findByIdAndUpdate(id,req.body,{new:true})
    if(!updateTask) return res.status(404).send({"message":"Task not found !"})
     res.status(200).send({"Message":"Updated Successfully !",updateTask})
}
 catch (error) {
        res.status(500).send({ "Message": "Something went wrong while Updating  the task !" })
        console.log(error);
    }
}


// For Delating the task 



export const deleteTask= async(req,res)=>{
try{
    const deleteTask=await taskmodel.findByIdAndDelete(req.params.id)
    if(!deleteTask) return res.status(404).send({"message":"Task not removed !"})
    res.status(200).send({"Message":"Deleated Successfully !"})

}
catch(error){
  res.status(500).send({ "Message": "Something went wrong while geeting the task !" })
        console.log(error);
}
}