import dotenv from "dotenv"


dotenv.config({
    path:"5.Backend-Project/1.source-code/.env"
});

import {ConnectDB} from "./db/db.js";
import {app} from "./app.js";

const PORT=process.env.PORT

ConnectDB().then(()=>{

    



    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log("Server Error",err);
});


