import mongoose from "mongoose";

let url ="mongodb://localhost:27017/rl_meanbatch";

export let dbConnection = mongoose.connect(url).then(res=>console.log("db Connected")).catch(err=>console.log(err));