const mongoose=require("mongoose")
const Schema=mongoose.Schema

const urlSchema= new Schema({
    shortId : {type:String, required:true,unique:true},
    url:{type:String, required:true}
   
})

const urlModel=mongoose.model("urls",urlSchema)

module.exports=urlModel


    