


const express = require("express");
const router = express.Router();

const { json } = require("body-parser");

exports.token=(req, res,next)=>{
    try {

        let unirest = require('unirest');
      
      
     req = unirest('GET', 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
      .headers({
          'Content-Type': 'application/json',
          'Authorization': 'Basic a01ESnZNdUViUVU5SE9YMllNR0taT1lOblJTR0UyQ3E6ZjhaTXE2Q2NCbFJ6dW9IYQ'
      })
      .send()
      .end(res_ => {
        if (res_.error) throw new Error(res_.error);
        // console.log(res_.raw_body);
    
        // //res_.json(res_.raw_body);
    
        // let json_fmt=JSON.stringify(res_.raw_body);
    
    
    
    
        let token= JSON.parse(res_.raw_body).access_token
    
    
    
        // console.log(json_fmt);
    
    
        console.log(token);
    
        req.get_token=token
    
        // res.json(token)
    
       next()
    
        
      });
      
      } catch (err) {
        //console.error(err.message)
      
        res.json({ error:err.message });
      
      
       
      }
};

module.exports=router;