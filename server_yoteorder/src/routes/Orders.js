const express = require("express");
const router = express.Router();
const { Bookings,Users,Orders,Order} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");



router.post("/",async (req,res)=>{

    

    const {item_name, order_description, customer_lat,customer_longitude,status,UserId}=req.body;

  

    try {
const order= await  Orders.create({
    item_name:item_name,
    order_description:order_description,
    customer_lat:customer_lat,
    customer_longitude:customer_longitude,
    status:status,
    UserId:UserId,
       
      })

      res.json(order);

      console.log(order);

    } catch (err) {
        console.error(err.message)
      }
    
  
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


router.get("/order/view/:id", async (req, res) => {
  const id = req.params.id;
  const order = await Orders.findByPk(id);

  //onst images = await Images.findOne({ where: { PropertyId: id }});
  res.json(order);
});

router.get("/myorderbids", validateToken, async (req, res) => {
  const my_order_bids = await Orders.findAll({
    where: { UserId: req.user.id},include:[OrderBids]
  });
  res.json(my_order_bids);
  console.log(my_order_bids)
});


module.exports=router;