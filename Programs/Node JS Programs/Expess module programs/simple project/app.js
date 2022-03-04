// load the module 
let express = require("express");
let fs = require("fs");
let bodyParser = require("body-parser");

// creating the reference of express module 
let app = express();

// add the middleware 
app.use(bodyParser.urlencoded({extended:true})); // enable post data from form. 

app.get("/sayHello",(req,res)=> {
    console.log("I Came Here")
    res.send("Welcome to Simple Express JS Application")
})
app.get("/aboutus",(req,res)=> {
    res.send("<h2>About Us</h2>")
})
app.get("/contactus",(req,res)=> {
    res.send("<h2>Contact Us</h2>")
})
app.get("/loginGet",(req,res)=> {
    res.sendFile(__dirname+"\\loginGet.html");
})

app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"\\loginPost.html");
})

app.get("/checkUser",(req,res)=> {
    let email  = req.query.email;
    let pass    = req.query.pass;
    let loginDetails = JSON.parse(fs.readFileSync("login.json"));
    let result = loginDetails.find(l=>l.email == email && l.pass == pass);
    if(result != undefined){
        res.send("Successfully Login")
    }else {
        res.send("Failure try once again")
    }
    
})

app.post("/checkUser",(req,res)=> {
    let login = req.body;
   // console.log(login);
   let loginDetails = JSON.parse(fs.readFileSync("login.json"));
   let result = loginDetails.find(l=>l.email == login.email && l.pass == login.pass);
   if(result != undefined){
       res.send("Successfully Login")
   }else {
       res.send("Failure try once again")
   }
})
app.get("/signUpPage",(req,res)=> {
    res.sendFile(__dirname+"\\signUp.html")
})
app.post("/signUp",(req,res)=> {
    let login  = req.body;
    let loginDetails = JSON.parse(fs.readFileSync("login.json"));
    let result = loginDetails.find(l=>l.email == login.email);
    if(result==undefined){
            loginDetails.push(login);
            fs.writeFileSync("login.json",JSON.stringify(loginDetails));
            res.send("Account Created successfully");
    } else {
            res.send("Email Id must be unique");
    } 
})
app.get("/",(req,res)=> {
    //res.sendFile("C:\\Users\\91990\\Desktop\\Real Variable MEAN Stack\\2022 - MEAN Stack Training Real Variable Client\\Programs\\Node JS Programs\\Expess module programs\\simple project\\index.html");
   // res.send(__dirname)
   res.sendFile(__dirname+"\\index.html");
})



app.listen(9090,()=>console.log("Server running on port number 9090"))