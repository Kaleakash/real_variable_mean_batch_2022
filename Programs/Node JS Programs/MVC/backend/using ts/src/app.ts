import express from 'express';
import productRouter  from './router/productRouter';
import * as db from './config/dbConfig';
import cors from 'cors';

let app = express();
let port = 9090;
db.dbConnection;          //  call db connection 

app.use(express.json());        // enable json data post and put method 
app.use(cors());                // enable cors policy to enable from angular 

// http://localhost:9090/api/product---> main path 
// http://localhost:9090/api/product/findAllProducts ---> getAllProduct 
//http://localhost:9090/api/product/storeProductDetails --> store product

app.use("/api/product",productRouter);



app.listen(port,()=>console.log(`Server running on port number ${port}`));