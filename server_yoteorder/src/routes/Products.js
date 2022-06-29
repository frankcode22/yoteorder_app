
const express = require("express");
const router = express.Router();
const { Products,Users } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

const db = require("../models");


const Sequelize=require('sequelize')

const Op=Sequelize.Op

 
router.post("/",async(req,res)=>{


    const {name, type,product_description,price, status, quantity,geo_location,unit_of_measure,latitude,longitude,UserId}=req.body;

    var statuss='available'

  
    const product= await Products.create({
        name: name,
        type: type,
        product_description: product_description,
        price: price,
        quantity: quantity,
        geo_location:geo_location,
        latitude:latitude,
        longitude:longitude,
        status: statuss,
        unit_of_measure:unit_of_measure,
        UserId:UserId,
       
      });
     
      res.json(product);
      

     // console.log(product);
  
});

router.get("/getproducts",async(req,res)=>{
  const productslist= await Products.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(productslist);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const products = await Products.findByPk(id);
  res.json(products);
});

router.get("/search/:item/:string_lng", async (req, res) => {

  try {

   const name= req.params.item;

   const longitude= req.params.string_lng;

  const item_list=await Products.findAll({where:{
    name:{[Op.like]:'%'+ name +'%'},

    longitude:{[Op.like]:'%'+ longitude +'%'}},include:[Users]}
  
  
  );

  res.json(item_list);
  console.log(item_list);
  console.log(name)

}catch(err){
  console.log({ error: err });
}
  
});


router.get("/searchLng/:item/:string_lng", async (req, res) => {


  try {
    const name= req.params.item;

   const longitude= req.params.string_lng;

  const products_list=await db.sequelize.query("SELECT * FROM products where longitude LIKE 'test%'",{
    model: Properties,
    mapToModel: true, // pass true here if you have any mapped fields

    replacements:{name:'Test Prop'}


  });

 
  res.json(products_list);
  console.log(products_list);

}catch(err){
  console.log({ error: err });
}

  
});



module.exports=router;