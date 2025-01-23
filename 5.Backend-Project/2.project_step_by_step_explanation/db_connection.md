## DB connection 

### important points 
1. while dealing with the database some unexpected errors/problems may occurre so alwayes wrap db connection code into try-catch .  

2. DB connection task is time taking so always use async await (for Asynchronus exicution )

  -> DB alwayes in the other continent 

## DB connection 

```js
// ---> src/constants.js 
export const DB_name="chai_database"
```
we can import DB_name when needed .

```js
//  ---> src/db/db.js

import mongoose form "mongoose";
import {DB_name} from "../constants.js" // Importing DB_name from constants.js 

const DB_URI=process.env.MONGO_URI;


const ConnectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${DB_URI}/${DB_name}`);
        console.log(`Database connected to ${connectionInstance.connection.name}`);

    }catch(err){
        console.log("DataBase connection error ",err);
        process.exit(1);

    }
}


export {ConnectDB} 
```
 we can import ConnectDB function to our index.js file.

 ConnectDB will return a promise ( async - await returns a promis  ) 


```js
const connectionInstance=await mongoose.connect(`${DB_URI}/${DB_name}`)
```
