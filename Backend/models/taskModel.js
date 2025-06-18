import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    title:{
        type:'String',
        required:'True'
    },
     description:{
        type:'String',
    },
    assignto:{
        type:'String',
    },
    status:{
        type:'String',
        enum:['To Do','In Progress','Done'],
        default:'To Do'
    }
})

export const taskmodel=mongoose.model('Task',taskSchema)