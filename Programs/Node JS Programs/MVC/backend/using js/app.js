// load modules 
let express = require("express");
let mongoose = require("mongoose");
let productRouter = require("./router/productRouter");
// connetion URL 
let url = "mongodb://localhost:27017/rl_meanbatch";
// reference created...
let app = express();

//middleware 
app.use(express.json())
// connect the database. 
mongoose.connect(url).then(res=>console.log("Connected")).catch(err=>console.log(err));

// http://localhost:9090/api/product/
app.use("/api/product",productRouter);



app.listen(9090,()=>console.log("Server running on port number 9090"));