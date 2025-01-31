# Nginx server 

Nginx (pronounced "engine-x") is a high-performance web server and reverse proxy server. It is widely used for serving static content, load balancing, and acting as a reverse proxy for HTTP and HTTPS traffic. Nginx is known for its stability, rich feature set, simple configuration, and low resource consumption.

A reverse proxy is a server that sits between client devices and backend servers, forwarding client requests to the appropriate backend server and returning the server's response to the client. It acts as an intermediary, providing various benefits such as load balancing, security, and caching.

## Server.js 
```js
// importing reqired modules 
import http from "http";
import fs from "fs";
import path from "path";

// creating port 
const port = 3000;

const server = http.createServer();


server.listen(port,()=>{
    console.log("server statrted")
})

```