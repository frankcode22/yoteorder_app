
module.exports = (app) => {

    const express = require("express");
  const router = express.Router();
  const { Bookings,Users,Orders,Customers,Products,OrderBids,Business,Staffs,Retailers,OrdersFromRetailors,RetailerSales,Services} = require("../models");
  const { validateToken } = require("../middlewares/AuthMiddleware");
  const { sign } = require("jsonwebtoken");


  const sequelize=require('sequelize')

const Op=sequelize.Op
  
  
  
  const credentials = {
    apiKey: 'dd4f7389fb18f079190d795898e4cf084e8161550371d664949dfecdbf1416d4',         // use your sandbox app API key for development in the test environment
    username: 'incredible',      // use 'sandbox' for development in the test environment
  };
  
  const Africastalking = require('africastalking')(credentials);
  
  // Initialize a service e.g. SMS
  const sms = Africastalking.SMS
  
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  router.post("/",async (req,res)=>{
  
    try {
  
      const {name,phone_no,amount_paid,order_status,customerId,orderId,total,BusinessId}=req.body;
  
      //let formated_contact='+254'+customer_phone_no.substring(1);

  var bal=total-amount_paid;
  const sale= await  RetailerSales.create({
     
      total:total,
      amount_paid:amount_paid,
      balance:bal,
      orderId:orderId,
    
      CustomerId:customerId,
      customer_phone_no:phone_no,
    
      RetailersId:BusinessId,
      RetailerId:BusinessId
         
        })
  
        

        const CustomerId=customerId;


      const order = await Orders.update({CustomerId},{ where: { orderId: orderId }});


  
        
        res.json(sale);
        //console.log("UPDATE VALUE",order);
        //console.log("YOUR Sale IS",sale);
  
      } catch (err) {
          console.error(err.message)
        }
      
    
  });


  router.post("/newcustomer",async (req,res)=>{
  
    try {
  
      const {name,phone_no,amount_paid,order_status,orderId,total,BusinessId}=req.body;
  
      //let formated_contact='+254'+customer_phone_no.substring(1);




      const customer= await Customers.create({
        name:name,
        phone_no:phone_no,
        RetailerId:BusinessId,
        RetailersId:BusinessId,
      
       
      });



        var bal=total-amount_paid;
  const sale= await  RetailerSales.create({
     
      total:total,
      amount_paid:amount_paid,
      balance:bal,
      orderId:orderId,
    
      CustomerId:customer.id,
      customer_phone_no:phone_no,
      RetailerId:BusinessId,
      RetailersId:BusinessId,
    
     // BusinessId:BusinessId,
         
        })
  
        const CustomerId=customer.id;


      const order = await Orders.update({CustomerId},{ where: { orderId: orderId }});


  
        
        res.json(sale);
        //console.log("UPDATE VALUE",order);
        //console.log("YOUR Sale IS",sale);
  
      } catch (err) {
          console.error(err.message)
        }
      
    
  });



  router.get("/getcustomerbill/:customerId",async(req,res)=>{

    const orders= await Orders.findAll({where: { CustomerId: req.params.customerId}, order: [
      ["id", "DESC"]
    ],include:[Retailers]});
  
  
    
   // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});
  
   //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
    res.json(orders);
  });



  router.get("/getselectedcustomerbill/:cId/:orderId",async(req,res)=>{

    const bill= await Orders.findAll({where: { CustomerId: req.params.cId, orderId: req.params.orderId}, order: [
      ["id", "DESC"]
    ],include:[Retailers]});
  
  
    
   // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});
  
   //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
    res.json(bill);
    console.log(bill);
  
  });


  router.put("/paycustomerbill/:cId/:orderId",async(req,res)=>{


    const balance=req.body.balance;

    const amount_paid=req.body.total_paid;
   


    const updated_bill = await RetailerSales.update({amount_paid,balance},{ where: {CustomerId: req.params.cId, orderId: req.params.orderId}});
  
    res.json(updated_bill);
    console.log(updated_bill);
  });

   
  
  
    
 


  
  
  router.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
  
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    
    // res.json("Customer saved Successfully");
  
   // res.json(customer);
    
    //console.log(customer);
  
   
    
    let order_no=randomNumberInRange(1, 10000);
     
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity,
                ProductId:4,
                orderId:order_no,
                UserId:3,
                businessId:item.businessId
               
  
  
  
                
            }
            
        )
  
        
  
        
        
    });
  
  
  
  
    /*
  
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });
  
    res.send(JSON.stringify({
        url: session.url
    }));
    */
  //   res.send(JSON.stringify({
  //     url: "www.patamtaani.com"
  // }))
  
  
  
  lineItems.forEach((item)=> {
    
  
    Orders.create({
      price: item.id,
      quantity_ordered: item.quantity,
      ProductId:4,
      orderId:item.orderId,
      UserId:3,
      BusinessId:item.businessId
  
  
    });
  
  
    
  });
  
  
  // const session = await Orders.create({
  //   order_description: lineItems,
  //   orderId:order_no,
  //   ProductId:4,
  //   UserId:3,
  
  // });
  
  
  // res.send(JSON.stringify({
  //   session: session
  // }));
  
  
  
  //    // res.json(session);
  //     console.log(session);
  
     res.json({order_no:order_no});
  
      console.log(order_no);
  
  
     
  
  
  });
  
  
  router.put("/savecustomerdetails", async (req, res) => {
    const orderId = req.params.oId;
  
    const ordered_item = req.body.ordered_item;
    const quantity_ordered=req.body.quantity_ordered;
    const user_id=req.body.UserId;
    const customer_phone_no=req.body.phone_no;
  
    const customer_name = req.body.name;
    const request_type=req.body.purchase_type;
    const status=req.body.status;
    const CustomerId=req.body.customerId;
  
   
   
  
  
    const update_order = await Orders.update({customer_phone_no,customer_name,request_type,CustomerId},{ where: { orderId: req.params.orderNo}});
  
    res.json(update_order);
    console.log(update_order);
  });
  
  router.get("/retailerSales/:bId",async(req,res)=>{
    const orders= await RetailerSales.findAll({where: { BusinessId: req.params.bId}, order: [
      ["id", "DESC"]
    ],include:[Business]});
  
  
    
   // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});
  
   //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
    res.json(orders);
  });


  router.get("/allsales", async (req, res) => {
    const my_order_bids = await RetailerSales.findAll({
      attributes: [
          'id',
          'orderId',
          'total',
          'amount_paid',
          'balance',


          [sequelize.fn('date_format', sequelize.col('createdAt'), '%Y-%m-%d'), 'datemade']
      ]})
      .then(function(result) {

        res.json(result)
        console.log(result);
      });
    
  });



  router.get("/allbills",validateToken,async (req, res) => {

 
    try {
  
    // let imagePath =  baseURL;

    let status='unsettled'
  
   
    const my_buss = await Retailers.findOne({ where: { UserId: req.user.id},include: [Users,Customers,Orders,Products,RetailerSales]});


    const bills = await RetailerSales.findAll({ where: {RetailersId: my_buss.id,status:status},include: [Customers]});
   
    console.log(bills);
    //res.json(my_buss);
   
    res.json({my_buss:bills});
   // console.log(my_buss);
  } catch (err) {
      console.error(err.message)
     // res.json({error:'ERROR WHILE FETCHING YOUR BUSINESS DATA',err});
    }
  });


  




  
  router.get("/orderById/:id", async (req, res) => {
    const id = req.params.id;
    const order = await Orders.findByPk(id);
    res.json(order);
  });
  
  router.put("/updateorder/:oId", async (req, res) => {
    const id = req.params.orderId;
  
    const ordered_item = req.body.ordered_item;
    const quantity_ordered=req.body.quantity_ordered;
    const user_id=req.body.UserId;
    const order_description=req.body.order_description;
  
    const customer_lat = req.body.customer_lat;
    const customer_longitude=req.body.customer_longitude;
    const status=req.body.status;
  
   
   
  
  
    const update_order = await Orders.update({ordered_item,order_description,quantity_ordered,customer_lat,customer_longitude,status},{ where: { id: req.params.oId}});
  
    res.json(update_order);
    console.log(update_order);
  });
  
  
  
  router.post("/orderfromsupplier", async (req, res) => {
  
  
       
    
   
    const {item_name,order_description,quantityOrdered,supplierId,supplyStoresId,RetailerId}=req.body;
   
  
    const order= await  OrdersFromRetailors.create({
      itemName:item_name,
      order_description:order_description,
      quantity_ordered:quantityOrdered,
      SupplierId:supplierId,
      SupplyStoresId:supplyStoresId,
     // RetailerId:RetailerId,
         
        })
  
    res.json(order);
    console.log(order);
  });
  
  
  
  
  router.put("/updatestatus/:oId", async (req, res) => {
    
   
    const order_status=req.body.order_status;
   
  
    const change_status = await Orders.update({order_status},{ where: { id: req.params.oId }});
  
    res.json(change_status);
    console.log(change_status);
  });
  
  
  
  
  router.get("/order/view/:id", async (req, res) => {
    const id = req.params.id;
    const order = await Orders.findByPk(id);
  
    //onst images = await Images.findOne({ where: { PropertyId: id }});
    res.json(order);
  });
  
  router.get("/myorders", validateToken, async (req, res) => {
    const my_orders = await Orders.findAll({
      where: { UserId: req.user.id},include:[Users,Business,Products]
    });
    res.json(my_orders);
    console.log(my_orders)
  });
  
  router.get("/myorderbids", validateToken, async (req, res) => {
    const my_order_bids = await Orders.findAll({
      where: { UserId: req.user.id},include:[OrderBids]
    });
    res.json(my_order_bids);
    console.log(my_order_bids)
  });
  
  
  router.get("/allorders",validateToken,async(req,res)=>{
    const orders= await Orders.findAll({include:[Customers]});
  
   // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});
  
   //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
    res.json(orders);
  });
  
  router.get("/mybusiness", validateToken, async (req, res) => {
    try {
   
    const my_buss = await Business.findOne({ where: { UserId: req.user.id },include: [Users,Staffs,Customers,Orders]});
  
  
    const orders_ = await Orders.findAll({ where: { BusinessId: my_buss.id}, order: [
      ["id", "DESC"]
    ],include: [Users,Customers,Products]});
   
  
    res.json(orders_);
    console.log('The buss id is'+my_buss.id);
  
  } catch (err) {
    console.error(err.message)
  
   
  }
  });
  
  
  app.use('/api/sales', router);
  
  }
  
  
  