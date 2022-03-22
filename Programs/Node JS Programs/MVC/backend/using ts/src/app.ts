import express from 'express';
import router from './router/productRouter';
import * as db from './config/dbConfig';

let app = express();
let port = 9090;
db.dbConnection;          //  call db connection 

app.use(express.json());        // enable json data 

// http://localhost:9090/api/product---> main path 
// http://localhost:9090/api/product/findAllProduct ---> getAllProduct 
//......
app.use("/api/product",router);



app.listen(port,()=>console.log(`Server running on port number ${port}`));