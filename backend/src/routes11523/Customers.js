

module.exports = (app) => {

  const express = require("express");

const router=express.Router();

const {Customers,Bookings}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");





router.post("/",async(req,res)=>{
    // const staff=req.body; 
const {name,phone_no,email,BusinessId,UserId}=req.body;



  try {
    const customer= await Customers.create({
      name:name,
      phone_no:phone_no,
      email:email,
      BusinessId:BusinessId,
      UserId:UserId,
     
    });
    // res.json("Customer saved Successfully");

    res.json(customer);
    
    console.log(customer);
  

    } catch (err) {
      console.error(err.message)

      //console.log(start);

     // console.log(end);
    }







});


router.get("/mycustomers",async(req,res)=>{
  const customersList= await Customers.findAll({include:[Bookings]});

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(customersList);
});




router.get("/getById/:id",async(req,res)=>{
  const customer_= await Customers.findOne({ where: { id: req.params.userId }});

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(customer_);
});

app.use('/api/customer', router);

}

