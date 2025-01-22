# CORS (Cross Origin Resource sharing )
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## installation 

    -> npm i cors 

## Usage 
```js
import express from "express";
import cors from "cors";

const app = express();  // creating express application 
 
//    -----> FOCUS HERE <----------

app.use(cors({
    // options 
}))

// <----------------------------------->

export {app} // exporting user define module -> express app 
```