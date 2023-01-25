const Retailers = require("./Retailers");


module.exports = (app) => {

    const express = require("express");
  
  const router=express.Router();
  
  const {Customers,Bookings,Products,Users,Business,Suppliers,SupplyStores,BusinessEngagements}=require("../models");
  
  const { validateToken } = require("../middlewares/AuthMiddleware");
  
  
  
  
  
  router.post("/makerequest",async(req,res)=>{
      // const staff=req.body; 
      
  const { itemName,
    engagementDescription,
    
    supplier_contacts,
    productId,
    supplierId,
    supplyStoresId,
    RetailerId}=req.body;

    var status='pending';
  
  
  
    try {
      const result= await BusinessEngagements.create({
        itemName:itemName,
       // retailerName:retailerName,
       
       status:status,
        engagement_description:engagementDescription,
        
        ProductId:productId,
        SupplierId:supplierId,
        SupplyStoreId:supplyStoresId,
        RetailerId:RetailerId,
       
      });
      // res.json("Customer saved Successfully");
  
      res.json(result);
      
      console.log(result);
    
  
      } catch (err) {
        console.error(err.message)
  
        //console.log(start);
  
       // console.log(end);
      }
  
  
  
  
  
  
  
  });
  
  
  router.get("/newrequests/:supplierId",validateToken,async(req,res)=>{
    try {
    const requests= await BusinessEngagements.findAll({
        where: { SupplierId: req.params.supplierId },
      include:[Suppliers,SupplyStores,Retailers]});
  
   // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});
  
   //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
    res.json(requests);
    
} catch (err) {
    console.error(err.message)

    //console.log(start);

   // console.log(end);
  }

  });
  
  
  
  
  router.get("/getById/:id",async(req,res)=>{
    const customer_= await Customers.findOne({ where: { id: req.params.userId }});
  
   // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});
  
   //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
    res.json(customer_);
  });
  
  app.use('/api/engagement', router);
  
  }
  
  