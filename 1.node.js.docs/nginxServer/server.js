import http from "http";
import fs from "fs";
import path, { join } from "path";
const port = 8080;

const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);
    
});

server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
    
})