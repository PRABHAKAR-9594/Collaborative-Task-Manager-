import mongoose from 'mongoose'

export const DBconnection=()=>{
mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("DB Connected Successfully !");
    
})
.catch((error)=>{
    console.log(error);
    
})
}