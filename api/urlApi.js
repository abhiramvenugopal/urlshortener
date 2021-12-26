const express=require("express");
const utility=require('../utility/utility')
const urlModel=require('../model/url')

const router=express.Router();

/**
 * @swagger
 * /api/v1/url/geturl:
 *  post:
 *    description: API for creating short URL
 *    consumes:
 *      - application/json  
 *    parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         schema:
 *             type: object
 *             required:
 *                  - url
 *             properties:
 *                  url:
 *                      type: string
 *    responses:
 *      '200':
 *        description: Return Short URL 
 *      '500':
 *        description: Request failed
 */
router.post('/geturl',async (req,res)=>{
    try {
        shortId=utility.createUrlId()
        url=process.env.baseurl+shortId
        try {
            console.log({shortId,url:req.body.url})
            //cadding URL and its id to the mongoDB
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