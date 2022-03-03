let http = require("http");

// http://localhost:9090/

let server = http.createServer((req,res)=>{
    res.end("Welcome to simple http module")
})

server.listen(9090,"localhost",console.log("Server running on port number 9090"))