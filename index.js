const express=require("express");
const mongoose=require("mongoose");
const dotenv = require('dotenv');
const cors=require("cors")
const urlAPI=require('./api/urlApi')
const redirectAPI=require('./api/redirectApi')
var bodyParser = require('body-parser')


const app=express();
dotenv.config();

mongoose.connect(process.env.DB)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//API for Creating short URL

app.use("/api/v1/url/",urlAPI);

//API for redirecting to actual URL

app.use("/url/",redirectAPI);


const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("server started at port : " +PORT)
})