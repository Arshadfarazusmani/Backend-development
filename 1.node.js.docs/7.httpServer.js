import http from "http";
const server = http.createServer((req,res)=>{
    if(req.url=== "/home"){
        res.end("Welcome")
    }
})

server.listen(8000,()=>{
    console.log("sever started");
    
})