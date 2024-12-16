// This is a server using es6 module in node js and this is also my first server

import {createServer} from  'http'
const hostname='127.0.0.1'
const port=3000;

const server =createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type",'text/plain');
    res.end("Hello world")
})
server.listen(port,hostname,()=>{
    console.log(`The server is running at http://${hostname}:${port}/`);
    
})