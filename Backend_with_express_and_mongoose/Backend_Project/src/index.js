import dotenv from "dotenv"


dotenv.config({
    path:"Backend_with_express_and_mongoose/Backend_Project/.env"
});

import {ConnectDB} from "./db/db.js";
import {app} from "./app.js";

const PORT=process.env.PORT

ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log("DB connection error ",err);
});

