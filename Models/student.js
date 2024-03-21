import mongoose from "mongoose";
const studentschema=mongoose.Schema({
    name:String,
    batch:String,
    email:String,
    mentor:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Mentor'
    }
})
const Student=mongoose.model('student',studentschema)
export default Student