import mongoose from "mongoose"; // module js syntax
// import { type } from "os";
const UserSchema=new mongoose.Schema({
    username:{
        type : String,
        required:true,
        unique:true,
        lowercase:true

    },

    email:{
        type:String,
        required:true,
        unique:true,
        

    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Password must be at least 6 characters long"]
    },
},{timestamps:true});

export const User=mongoose.model("User",UserSchema);
