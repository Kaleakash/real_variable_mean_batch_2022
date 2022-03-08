let express = require("express");

let products =[
    {pid:1,pname:"TV",price:85000},
    {pid:2,pname:"Computer",price:45000}
]
let app  = express();

// add middleware 
app.use(express.json());        // Enable json data from request body 

// http://localhost:9090
app.get("/",(req,res)=> {
    res.send("Welcome to Simple REST API");
})

// http://localhost:9090/sayHello
app.get("/sayHello",(req,res)=> {
    res.send("Message in text format")
})
// http://localhost:9090/jsonMsg
app.get("/jsonMsg",(req,res)=> {
    res.json({"msg":"Simple Mesage in JSON Format"});
})
// http://localhost:9090/getProduct
app.get("/getProduct",(req,res)=> {
    res.json(products[0]);
})
// http://localhost:9090/findAllProduct
app.get("/findAllProduct",(req,res)=> {
    res.json(products);
})
// http://localhost:9090/queryParam?id=1
// http://localhost:9090/queryParam?id=100
app.get("/queryParam",(req,res)=> {
    let id = req.query.id
    let result = products.find(p=>p.pid==id);
    if(result==undefined){
        res.json({"msg":"Record not present"});
    }else {
        res.json(result);
    }
})
// http://localhost:9090/pathParam/1
// http://localhost:9090/pathParam/2
app.get("/pathParam/:id",(req,res)=> {
    let id = req.params.id;
    let result = products.find(p=>p.pid==id);
    if(result==undefined){
        res.json({"msg":"Record not present"});
    }else {
        res.json(result);
    }
})
// http://localhost:9090/multiPathParam/1/80000
// http://localhost:9090/multiPathParam/1/90000
app.get("/multiPathParam/:id/:price",(req,res)=> {
    let id = req.params.id;
    let price = req.params.price;
    let result = products.find(p=>p.pid==id && p.price > price);
    if(result==undefined){
        res.json({"msg":"Record not present"});
    }else {
        res.json(result);
    }
})
// http://localhost:9090/storeProduct
app.post("/storeProduct",(req,res)=> {
        let product = req.body; // this code to receive data from request body 
        //console.log(product);
        let result = products.find(p=>p.pid == product.pid);
        if(result==undefined){
                products.push(product);
                res.send("Product Record stored")
        }else {
                res.send("Product is must be unique");
        }
})
// http://localhost:9090/deleteProduct/1
// http://localhost:9090/deleteProduct/100
app.delete("/deleteProduct/:pid",(req,res)=> {
    let pid = req.params.pid;
    let index = products.findIndex(p=>p.pid==pid);
    if(index<0){
        res.send("Record not present")
    }else {
        products.splice(index,1);
        res.send("Record deleted successfully");
    }
})
// http://localhost:9090/updateProductPrice
app.put("/updateProductPrice",(req,res)=> {
    let product = req.body;
    let index = products.findIndex(p=>p.pid==product.pid);
    if(index<0){
        res.send("Record not present")
    }else {
        products[index].price = product.price;
        products[index].pname = product.pname;
        res.send("Record updated successfully");
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"))