const express = require("express");
const router = express.Router();
const { Users,ProductRequests,SubscriptionRequests} = require("../models");
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

  
    const {first_name,last_name , phone_no,location,produce, status,request_accepted_at,request_declined_at,request_cancelled_at,UserId}=req.body;

     



    try {
const s_requests= await SubscriptionRequests.create({
      first_name:first_name,
      last_name:last_name,
      phone_no:phone_no,
      location:location,
      produce:produce,
    
   
       
     
       status:status,
      

       request_accepted_at:request_accepted_at,
       
       request_declined_at:request_declined_at,

       request_cancelled_at:request_cancelled_at,

       UserId:UserId, 
      })



      res.json(s_requests);
    
      console.log(s_requests);


          // Use the service
const options = {
    to: ['+254714639773'],
    message: "Hello! I kindly request to join your platform. My product is "+product_name
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


router.get("/current_requests",  async (req, res) => {
    const current_req = await SubscriptionRequests.findAll({
      where: { status: 'pending'}
    });
    res.json(current_req);
  });

  router.put("/acceptrequest", async (req, res) => {
    const id =  req.body.id;
    const status = req.body.status;

  
    try {
  
      const subscription_request_item = await SubscriptionRequests.update({status},{ where: { id: id }});

      const subscription_request_data = await SubscriptionRequests.findOne({ where: { id: id } });

     

      
          // Use the service
const options = {
  to: [subscription_request_data.phone_no],
  message: "Hello! "+subscription_request_data.last_name+ "Your request  to join KilimoMazao has been approved.Kindly visit www.kilimomazao.com or  contact us on 0714639773 for further instructions "
}

// Send message and capture the response or error
sms.send(options)
  .then( response => {
      console.log(response);
  })
  .catch( error => {
      console.log(error);
  });


  
    res.json(subscription_request_item);
    console.log(subscription_request_data);

    console.log(subscription_request_phone_no);
  
    }catch(err){
      console.log({ error: err });
    }
  
    
  });

module.exports=router;