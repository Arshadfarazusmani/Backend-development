import mongoose from "mongoose";
import { DB_name}from"./constants.js";


const ConnectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
        console.log(`Database connected to ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("DataBase connection error ",error);
        process.exit(1);
        
        
    }
}

export default ConnectDB;