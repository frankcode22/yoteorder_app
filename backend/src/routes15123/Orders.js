
module.exports = (app) => {

  const express = require("express");
const router = express.Router();
const { Bookings,Users,Orders,Customers,Products,OrderBids,Business,Staffs,OrdersFromRetailors,Services} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

const axios = require('axios');

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

    

    const {item_name,order_description,customer_phone_no,order_status,orderId,ProductId,quantity_ordered,customer_lat,customer_longitude,status,UserId,BusinessId,CustomerId}=req.body;

    //let formated_contact='+254'+customer_phone_no.substring(1);

    try {
const order= await  Orders.create({
    item_name:item_name,
    order_description:order_description,
    quantity_ordered:quantity_ordered,
    orderId:orderId,
    ProductId:ProductId,
    CustomerId:CustomerId,
    customer_phone_no:customer_phone_no,
    customer_lat:customer_lat,
    customer_longitude:customer_longitude,
    order_status:order_status,
   // status:status,
    UserId:UserId,
    BusinessId:BusinessId,
       
      })

      res.json(order);

      const options = {
        to: [customer_phone_no],
        message: "Your order for "+item_name+" has been initiated successfully.The vendor will contact you shortly"
      }
      
      // Send message and capture the response or error
      sms.send(options)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });


    const bizz_details = await Business.findOne({ where: { id: BusinessId },include: [Users]});



    console.log("THE USER PHONE NO IS",bizz_details.User.phone_no);



    const options_bizz = {
      to: [bizz_details.User.phone_no],
      message: "You have a new order for "+item_name+" The orderId is "+orderId+". Kindly login and confirm the order. Please maintain professionalism "
    }
    
    // Send message and capture the response or error
    sms.send(options_bizz)
      .then( response_bizz => {
          console.log(response_bizz);
      })
      .catch( error => {
          console.log(error);
      });




    

      console.log("YOUR ORDER IS",order);

    } catch (err) {
        console.error(err.message)
      }
    
  
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
              price: item.price,
              quantity: item.quantity,
              productId:item.id,
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



lineItems.forEach(async (item)=> {
  

  Orders.create({
    price: item.price,
    quantity_ordered: item.quantity,
    ProductId:item.productId,
    orderId:item.orderId,
    UserId:3,
    RetailersId:item.businessId


  });


//let product = Products.findOne({ where: { id: item.productId }})

const product_ = await Products.findByPk(item.productId);
    // catch manually added items (don't exist in inventory)
   // console.log(product_.id);


    var updatedQuantity =
    parseInt(product_.quantity) -
    parseInt(item.quantity);

   
   
    
    




    const product_update=await Products.update({quantity:updatedQuantity},{ where: { id: product_.id}});

   
    console.log(product_update);


  
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


router.get("/datebasedorders",validateToken, async (req, res) => {
  const date_m='2023-01-10';
  const orders_date = await Orders.findAll({
    attributes: [
        'id',
        'item_name',
        'orderId',
        'price',
        'quantity_ordered',
        'CustomerId',
        'ProductId',


        [sequelize.fn('date_format', sequelize.col('createdAt'), '%Y-%m-%d'), 'datemade']
    ],where: { UserId: req.user.id}})
    .then(function(result) {

      res.json(result)
      console.log(result);
    });
  
});



router.get("/getallorders",async(req,res)=>{
  const orders= await Orders.findAll({ order: [
    ["id", "DESC"]
  ],include:[Users]});


  
 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(orders);
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



router.post("/orderfromretailer", async (req, res) => {



 
  const {item_name,order_description,quantityOrdered,retailerName,retailerContacts,supplierId,suppier_name,supplyStoresId,supplier_contacts,RetailerId}=req.body;
 
    let formated_contact='+254'+supplier_contacts.substring(1);

  const order= await  OrdersFromRetailors.create({
    itemName:item_name,
    order_description:order_description,
    quantity_ordered:quantityOrdered,
    SupplierId:supplierId,
    SupplyStoresId:supplyStoresId,
    RetailerId:RetailerId,
    RetailersId:RetailerId
       
      })


      console.log("FORMATED PHONE NUMBER IS"+formated_contact);

      var jsonD={
        "api_key":"r4DYiGq3bOgMWAeJnyl7KwpaTX6vhcRIf92j81SVtQLP0msod5EBZUFxHNkzCu",
          "service_id":0,
          "mobile":formated_contact,
          "response_type":"json",
          "shortcode":"PataMtaani",
          "message":"Hello! "+suppier_name+" You have a new order from "+retailerName+" .The retailer contacts is "+retailerContacts,
          "date_send":"2021-01-13 16:40:00"
        }
        
  
      axios.post('https://api.tililtech.com/sms/v3/sendsms',jsonD).then(response => {
               console.log(response);
           })
           .catch( error => {
               console.log(error);
           });

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


app.use('/api/order', router);

}


