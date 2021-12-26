const express=require("express");
const mongoose=require("mongoose");
const dotenv = require('dotenv');
const cors=require("cors")
const urlAPI=require('./api/urlApi')
const redirectAPI=require('./api/redirectApi')
var bodyParser = require('body-parser')
const swaggerJsDoc=require('swagger-jsdoc')
const swaggerUI=require('swagger-ui-express')


const app=express();
dotenv.config();

mongoose.connect(process.env.DB)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const swaggerInfo={
    swaggerDefinition: {
        info: {
          version: "1.0.0",
          title: "URL Shortner API",
          description: "API for converting long URLs with UTM tracking",
          contact: {
            name: "Abhiram Venugopal",
            email: "abhiram.venugopal007@gmail.com"
          },
          servers: ["https://urlshortenerapp77.herokuapp.com"]
        }
      },
      apis: ["./api/*.js"]
}

const swaggerDocs=swaggerJsDoc(swaggerInfo)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))


//API for Creating short URL

app.use("/api/v1/url/",urlAPI);

//API for redirecting to actual URL

app.use("/url/",redirectAPI);


const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("server started at port : " +PORT)
})