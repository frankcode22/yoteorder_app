const express = require("express");
const router = express.Router();
const request = require('request')
const { Payouts,Bookings,Properties,Users,PropertyAddress,PropertyPrice,Payments} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
const { json } = require("body-parser");

const token= require("../controllers/MpesaController");


const maker = access_token()
const headers = {
    "Authorization": "Bearer " + maker,
    'Content-Type': 'application/json',
}



function access(req, res, next) {




  // access token


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

    console.log(JSON.parse(res_.raw_body).access_token)

    req.access_token = JSON.parse(res_.raw_body).access_token
    next()

  });
  
  } catch (err) {
    //console.error(err.message)
  
    res.json({ error:err.message });
  
  
   
  }


  
}






function access_token()
{


  try {

    let unirest = require('unirest');
  
  
    let req = unirest('GET', 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
  .headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic a01ESnZNdUViUVU5SE9YMllNR0taT1lOblJTR0UyQ3E6ZjhaTXE2Q2NCbFJ6dW9IYQ'
  })
  .send()
  .end(res_ => {
    if (res_.error) {

      console.log(res_.error);

    }

    else{

      let token= JSON.parse(res_.raw_body).access_token



      // console.log(json_fmt);
  
  
      //console.log(token);
  
  
      return token;

    }


   
    
    
    //throw new Error(res_.error);
    // console.log(res_.raw_body);

    // //res_.json(res_.raw_body);

    // let json_fmt=JSON.stringify(res_.raw_body);




   
  });
  
  } catch (err) {
    //console.error(err.message)
  
    res.json({ error:err.message });
  
  
   
  }

}














 router.get("/get_token", async (req, res,next) => {

  try {

    let unirest = require('unirest');
  
  
    let req = unirest('GET', 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
  .headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic a01ESnZNdUViUVU5SE9YMllNR0taT1lOblJTR0UyQ3E6ZjhaTXE2Q2NCbFJ6dW9IYQ'
  })
  .send()
  .end((res_ )=> {
    if (res_.error) 
    
    {
      res.json({ error: res_.error });
      console.log(res_.res_);
    }
    else{

      let token= JSON.parse(res_.raw_body).access_token
      console.log(token);

      req.get_token=token
  
       res.json(token)
  
      next()

    }

    
      
     
    // console.log(res_.raw_body);

    // //res_.json(res_.raw_body);

    // let json_fmt=JSON.stringify(res_.raw_body);




   



    // console.log(json_fmt);


   

    
  });
  
  } catch (err) {
    //console.error(err.message)
  
    res.json({ error:err.message });
  
  
   
  }


});



router.post("/pay",async(req,res)=>{

  let unirest = require("unirest");

 


    try {
      const {short_code,buyer,amount,accesstoken}=req.body;
     
     req = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
.headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accesstoken

    
})
.send(JSON.stringify({
  "BusinessShortCode":short_code,    
  "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
"Timestamp":"20160216165627",    
"TransactionType": "CustomerPayBillOnline",    
  "Amount":"5",    
  "PartyA":buyer,    
   "PartyB":short_code,   
"PhoneNumber":buyer,    
"CallBackURL":"https://mydomain.com/pat",    
"AccountReference":"PataMtaani",    
"TransactionDesc":"PataMtaani Pay"
  }))
.end((resp) => {
    if (resp.error){

     // throw new Error(resp.error);

     res.json({ error: resp.error });

    } 

  else{
    res.json(resp.raw_body);
   //console.log(resp.raw_body);
  
  }


   
});

} catch (err) {
    //console.error(err.message)

    res.json({ error:err.message });

  
   
  }


    
  });





  router.get("mpesa/test_pay",token)





module.exports=router;