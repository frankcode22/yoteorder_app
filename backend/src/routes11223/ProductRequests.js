const express = require("express");
const router = express.Router();
const { Users,ProductRequests} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");



const credentials = {
    apiKey: 'dd4f7389fb18f079190d795898e4cf084e8161550371d664949dfecdbf1416d4',         // use your sandbox app API key for development in the test environment
    username: 'incredible',      // use 'sandbox' for development in the test environment
  };
  
  const Africastalking = require('africastalking')(credentials);
  
  // Initialize a service e.g. SMS
  const sms = Africastalking.SMS


router.post("/",async (req,res)=>{


  
    const {product_name,customer_phone_no, seller_email,seller_phone_no,customer_address, customer_lat,customer_longitude ,status, cust_place_of_residence, request_type,
        currency_code,payment_method_id,request_made_at,request_accepted_at,request_declined_at,request_cancelled_at,SellerId,BuyerId}=req.body;

     



    try {
const c_requests= await  ProductRequests.create({
       product_name:product_name,
       customer_phone_no:customer_phone_no,
       seller_email:seller_email,
       seller_phone_no:seller_phone_no,
       customer_address:customer_address,
       customer_lat:customer_lat,
       customer_longitude:customer_longitude,
       
       cust_place_of_residence:cust_place_of_residence,
       request_type:request_type,

       currency_code:currency_code,
       payment_method_id:payment_method_id,
       request_made_at:request_made_at,
       status:status,
      

       request_accepted_at:request_accepted_at,
       
       request_declined_at:request_declined_at,

       request_cancelled_at:request_cancelled_at,

       SellerId:SellerId,

       BuyerId:BuyerId,

       
      })





      res.json(c_requests);
    
      console.log(c_requests);


          // Use the service
const options = {
    to: ['+254714639773'],
    message: "Hello! You have a new customer interested in your product named "+product_name+" The customer no is "+customer_phone_no
  }
  
  // Send message and capture the response or error
  sms.send(options)
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });



    } catch (err) {
        console.error(err.message)
      }
    
  
});


router.get("/current_requests", validateToken, async (req, res) => {
    const current_req = await ProductRequests.findAll({
      where: { SellerId: req.user.id },include: [Users]
    });
    res.json(current_req);
  });


  router.put("/confirmrequest", async (req, res) => {
    const id =  req.body.id;
    const status = req.body.status;

  
    try {
  
      const status_confirm = await ProductRequests.update({status},{ where: { id: id }});

      const request_data = await ProductRequests.findOne({ where: { id: id } });




      
          // Use the service
const options = {
  to: [request_data.customer_phone_no],
  message: "Hello! Your request have been confirmed by the farmer product.The product ordered is "+request_data.product_name
}

// Send message and capture the response or error
sms.send(options)
  .then( response => {
      console.log(response);
  })
  .catch( error => {
      console.log(error);
  });


  
    res.json(status_confirm);
    console.log(status_confirm);

    console.log(request_data.customer_phone_no);
  
    }catch(err){
      console.log({ error: err });
    }
  
    
  });


module.exports=router;




















module.exports=router;