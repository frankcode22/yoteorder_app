const express = require("express");
const router = express.Router();
const { Bookings,Users,Orders,OrderBids,RunningOrders,OrderPayments} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");






router.post("/",async (req,res)=>{


 


  const {OrderId, amount, status,UserId,SellerId}=req.body;


  try {
const order_payments= await  OrderPayments.create({
  OrderId:OrderId,
  amount:amount,
  status:status,
      UserId:1,
      SellerId:1,
      
     
    })

   



    res.json(order_payments);
  
    console.log(order_payments);

  } catch (err) {
      console.error(err.message)
    }
  

});

module.exports=router;



