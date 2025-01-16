import mongoose from "mongoose";
const SubTodoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        
        
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});

export const SubTodo = mongoose.model("SubTodo", SubTodoSchema);