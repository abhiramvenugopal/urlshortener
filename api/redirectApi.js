const express=require("express");
const urlModel=require('../model/url')
const router=express.Router();

/**
 * @swagger
 * /<shortId>
 * get:
 *  description: API redirecting short URL to Actual URL
 *  responses:
 *      '400':
 *        description: URL Not Found    
 */

// Request handler for rediecting short URL to Actual URL
router.get('/:shortId',async (req,res)=>{
    try {
        //fetching Actiual URL from DB
        let urlObject= await urlModel.findOne({shortId:req.params.shortId})
        res.redirect(urlObject.url)
    } catch (error) {
        res.status(401).json({status:"failed", message:"URL Not Found"})
    }
    
    
})

module.exports=router