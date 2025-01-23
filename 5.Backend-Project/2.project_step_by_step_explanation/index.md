# index.js file 

```js
import dotenv from "dotenv"


dotenv.config({
    path:"Backend_with_express_and_mongoose/Backend_Project/.env"
});

import {ConnectDB} from "./db/db.js"; // Importing ConnectDB function .
import {app} from "./app.js";  // Importing App 

const PORT=process.env.PORT || 5000 // Taking PORT from .env 

ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log("DB connection error ",err);
});


```

### ConnectDB returns a promiss 
```js 
ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log("DB connection error ",err);
});

```
### creating server 
```js
app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
        });
```