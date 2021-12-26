const express=require("express");
const utility=require('../utility/utility')
const urlModel=require('../model/url')

const router=express.Router();


router.post('/geturl',async (req,res)=>{
    try {
        shortId=utility.createUrlId()
        url=process.env.baseurl+shortId
        try {
            console.log({shortId,url:req.body.url})
            await urlModel.create({shortId,url:req.body.url})
            res.status(200).json({status:"success",url})
        } catch (error) {
            console.log(error)
            res.status(500).json({status:"failed"})  
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"})
    }
    
})


module.exports=router