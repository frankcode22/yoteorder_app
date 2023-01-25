const express = require("express");
const router = express.Router();
const { Bookings,Users,Orders,OrderBids,RunningOrders} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");



router.post("/",async (req,res)=>{


 


    const {OrderId, amount, status,UserId,SellerId}=req.body;


    try {
const running_orders= await  RunningOrders.create({
    OrderId:OrderId,
    amount:amount,
    status:status,
        UserId:1,
        SellerId:1,
        
       
      })

     



      res.json(running_orders);
    
      console.log(running_orders);

    } catch (err) {
        console.error(err.message)
      }
    
  
});

module.exports=router;