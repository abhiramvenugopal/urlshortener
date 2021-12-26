const express=require("express");
const mongoose=require("mongoose");
const dotenv = require('dotenv');
const cors=require("cors")


const app=express();
app.use(cors())
dotenv.config();


const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("server started at port : " +PORT)
})