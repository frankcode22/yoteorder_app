const express = require("express");
const router = express.Router();
const { Bookings,Users,Orders,OrderBids,RunningOrders,OrderPayments} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");






router.post("/",async (req,res)=>{



  const {OrderId, amount, status,payment_method,mpesa_code,UserId}=req.body;


  try {
const order_payments= await  OrderPayments.create({
  OrderId:OrderId,
  payment_method:payment_method,
  mpesa_code:mpesa_code,
  amount:amount,
  status:status,
  UserId:1,
      
    })

   


    res.json(order_payments);
  
    console.log(order_payments);

  } catch (err) {
      console.error(err.message)
    }
  

});



router.get("/getCustomerPayments", validateToken,async (req, res) => {

  const payments = await OrderPayments.findAll({
    where: { UserId:  req.user.id}
  });
  res.json(payments);
  console.log(payments)
});


module.exports=router;



