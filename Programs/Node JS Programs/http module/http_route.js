let http = require("http");
let url = require("url");
let indexPage = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
    <h2>Welcome to My Simple WEb Page</h2>
    <a href="aboutus">About Us</a>
    <a href="contactus">Contact Us</a>
    <a href="feedback">Feedback</a>
    <a href="login">Login Page</a>
    </body>
</html>
`
let loginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Login Page</h2>
    <form action="checkUser">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
    </form>
</body>
</html>
`
let server = http.createServer((req,res)=>{
    let urlRef = url.parse(req.url,true);
    res.setHeader("content-type","text/html");
    if(urlRef.pathname != "/favicon.ico"){
       // console.log("I came here")
       if(urlRef.pathname == "/aboutus"){
           res.write("<h2>Welcome to About Us Page</h2>");// add data in response 
           res.write("<p>About Us Description Page</p>")   // add data in resonse 
       }else if(urlRef.pathname == "/contactus"){
        res.write("<h2>Welcome to Contact Us Page</h2>");// add data in response 
        res.write("<p>Contact Us Description Page</p>")   // add data in r
       }
       else if(urlRef.pathname=="/feedback"){
        res.write("<h2>Welcome to Feedback Page</h2>");// add data in response 
        res.write("<p>Feedback Description Page</p>")   // add data 
       }else if(urlRef.pathname=="/login"){
           res.write(loginPage);
       }else if(urlRef.pathname == "/checkUser") {
            let login = urlRef.query;
            if(login.user == "Raj" && login.pass == "123"){
                res.write("Successfully Login")
            }else {
                res.write("Failure try once again")
            }
       }else {
        res.write(indexPage)
       }
    }
    //res.end("Welcome to Simple Application")
    res.end();
})

server.listen(9090,()=>console.log("Server up... 9090"))