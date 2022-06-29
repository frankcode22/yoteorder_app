const express = require("express");

const router=express.Router();

const {Customers}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");





router.post("/",async(req,res)=>{
    // const staff=req.body; 
const {name,phone_no,email,BusinessId}=req.body;

Customers.create({
    name:name,
    phone_no:phone_no,
    email:email,
    BusinessId:BusinessId,
   
  });
  res.json("Customer addeeff Successfully");

});


router.get("/mycustomers",async(req,res)=>{
  const customersList= await Customers.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(customersList);
});


module.exports=router;