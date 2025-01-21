import mongoose from "mongoose";
import { DB_name } from"../constants.js";   // Importing DB_name from constants.js -> do dot lgana hai.



const ConnectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
        console.log(`Database connected to ${connectionInstance.connection.name}`);
        
        
    } catch (error) {
        console.log("DataBase connection error ",error);
        process.exit(1);
        
        
    }
}

export { ConnectDB};



