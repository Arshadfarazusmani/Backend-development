import mongoose from "mongoose";
import { type } from "os";
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
       
        type:mongoose.Schema.Types.ObjectId,
        ref:"Catagory"

    
    },
    Stock:{
        type:Number,
        required:true
    },
   

    photo:{
        type:String,
    },
},{timestamps:true});
export const Product = mongoose.model("Product", ProductSchema);