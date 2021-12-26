const express=require("express");
const urlModel=require('../model/url')
const router=express.Router();


router.get('/:shortId',async (req,res)=>{
    try {
        let urlObject= await urlModel.findOne({shortId:req.params.shortId})
        res.redirect(urlObject.url)
    } catch (error) {
        res.status(500).json({status:"failed"})
    }
    
    
})

module.exports=router