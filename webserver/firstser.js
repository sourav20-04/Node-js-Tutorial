// const http = require('http');
// const PORT= 3000;

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write("Congrats you have created a webserver");
//     res.end()
// }).listen(PORT,()=>{
//     console.log(`The server is running at http://'127.0.0.1:${PORT}'`);
    
// })


// Import Node.js core module i.e http
const http = require('http');
const { url } = require('inspector');

// Create web server
const server = http.createServer(function (req, res) {

     if (req.url=='/') {
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write(
            `<html>
                <body style="text-align: center">
                    <h1 style="color: green">Welocome to my webpage</h1>
                     <p>This is for practice webserver</p>
                </body>
            </html>`
         )
         res.end();
     }


     else if(req.url=='/profile'){
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(
                `<html>
                    <body style="text-align: center">
                        <h1 style="color: blue">Welocome to my Profile</h1>
                         <p>This is my profile</p>
                    </body>
                </html>`
             )
             res.end();
     }

     else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(
            `<html>
                <body style="text-align: center">
                    <h1 style="color: black">Do you know about me?</h1>
                     <p>I am sourav</p>
                </body>
            </html>`
         )
         res.end();
 }


 else if(req.url=='/content'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(
        `<html>
            <body style="text-align: center">
                <h1 style="color: red">Here is the content of the site</h1>
                 <p>This is the content section</p>
            </body>
        </html>`
     )
     res.end();
}

else{
    res.end("invalid request")
}

    // Server object listens on port 8081
}).listen(3000, () => console.log('Server running on port 3000'));