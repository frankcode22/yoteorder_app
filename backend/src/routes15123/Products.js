module.exports = (app) => {


  const express = require("express");
const router = express.Router();
const { Products,Users,Business } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
//import _ from 'lodash';
//import { baseURL } from '../config';
const { baseURL } = require('../config');
const uploadMiddleware = require('../middlewares/uploaderMiddleware');
const db = require("../models");

const cloudinary = require("../middlewares/cloudinary");


const Sequelize=require('sequelize')

const Op=Sequelize.Op

// image Upload
const multer = require('multer')
const path = require('path');
const fs = require('fs');

 
router.post("/add",async(req,res)=>{

  //const {image, name,price ,product_description, published,UserId,BusinessId}=req.body;
    //const {name, type,product_description,price, status,product_image, quantity,geo_location,unit_of_measure,latitude,longitude,BusinessId,UserId}=req.body;

    var statuss='available'

    let info = {
      image: req.file.path,
      name: req.body.title,
      price: req.body.price,
      product_description: req.body.description,
      UserId:req.body.UserId,
      BusinessId:req.body.BusinessId,
       
      published: req.body.published ? req.body.published : false
  }

  const product = await Products.create(info)
  res.status(200).send(product)
  console.log(product)
  
    

     // console.log(product);
  
});

router.post('/save_item', uploadMiddleware.upload, async (req, res) => {

  try {



 

  // let ImageName=req.file.filename

  let businessId=req.body.businessId;

  let product_name=req.body.name;

  let userId=req.body.UserId;

  let quantity=req.body.quantity;

  let unit_of_measure=req.body.unit_of_measure;

  let type=req.body.type;

  let product_description=req.body.product_description;

  let latitude=req.body.latitude;

  let longitude=req.body.longitude;

  let retailerProductCategoryId=req.body.retailerProductCategoryId;

  




  let price=req.body.price;


  let status='available';

 

 

 

  
  Products.create({
      name: product_name,
      price: price,
      //product_image: ImageName,
      quantity: quantity,
      product_description:product_description,
      category:type,
      latitude:latitude,
      longitude:longitude,
      status: status,
      unit_of_measure:unit_of_measure,
      RetailerProductCategoryId:retailerProductCategoryId,
  
      UserId: userId,
      RetailersId:businessId,
  }).then((image) => {
      try{
             

          //console.log('File uploaded successfully');

          //console.log(image);

        //  console.log("THE IMAGE NAME IS:",ImageName);

         // console.log("THE CLOUDINARY URL IS "+ result.secure_url);

      
          //console.log("THE CLODINARY ID IS "+result.public_id);
          
         
      }catch(e){
          console.log(e);
         // res.json({'err': e});
      }
  });
  
  
  return res.json({businessId:businessId
  });

} catch (err) {
  console.error(err.message)
}
});


router.get("/allproducts",validateToken,async(req,res)=>{

  try {
  const productslist= await Products.findAll({include:[Business]});

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(productslist);
} catch (err) {
  console.error(err.message)
}
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const products = await Products.findByPk(id);
  res.json(products);
});


router.put("/updateproduct/:pId", async (req, res) => {
  const id = req.params.orderId;


  const ordered_item = req.body.price;
  const name = req.body.name;
  const quantity_ordered=req.body.quantity;
  const type=req.body.type;
  const order_description=req.body.product_description;

  const customer_lat = req.body.customer_lat;
  const customer_longitude=req.body.customer_longitude;
  const status=req.body.status;
  const category=req.body.category;

  const unit_of_measure=req.body.unit_of_measure;

  
 
  const product_ = await Products.update({name,ordered_item,order_description,type,quantity_ordered,category,unit_of_measure},{ where: { id: req.params.pId}});

  res.json(product_);
  console.log(product_);
});


router.put('/update-product/:pId', uploadMiddleware.upload, async (req, res) => {

  try {
  let imagePath = req.file.path.replace("public", baseURL);

  imagePath = imagePath.split('src')[1].substring(1, imagePath.length);


  let product = await Products.findByPk(req.params.pId);

  let buss_id=req.body.businessId;
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id);
    // Upload image to cloudinary
    let result;


    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path,{
        folder: buss_id
    });

    console.log("THE CLOUDINARY URL IS "+ result.secure_url);

        
    console.log("THE CLOUDINARY ID IS "+result.public_id);
    }

 


  let cloudinary_url=result.secure_url;

  let cloudinary_id= result.public_id;

  let product_image=req.file.filename

  let businessId=req.body.businessId;

  let name=req.body.name;

  let userId=req.body.UserId;

  let quantity=req.body.quantity;

  let unit_of_measure=req.body.unit_of_measure;

  let category=req.body.type;

  let product_description=req.body.product_description;

  

  let price=req.body.price;

  let latitude=req.body.latitude;

  let longitude=req.body.longitude;


  let status='available';


  // const product = await Products.update(req.body, { where: { id: req.params.pId }})

  // //res.status(200).send(product)

  // res.json(product);

 

  
  const product_ = await Products.update({
       name,
      price,
      product_image,
      quantity,
      cloudinary_id,
      cloudinary_url,
      latitude,
      longitude,
      product_description,
      category,
      status,
      unit_of_measure,
     
  },{ where: { id: req.params.pId}}).then((image) => {
      try{
             

          console.log('Product updated');

          console.log(image);

          console.log(product_image);

          // res.json(image);
          
         
      }catch(e){
          console.log(e);
         // res.json({'err': e});
      }
  });
  
  res.json(product_);

  console.log(product_);
  
  // return res.json({imagePath:imagePath,
  //     ImageName:ImageName,businessId:businessId
  // });

} catch (err) {
  console.log(err);
}
});


{/*router.get("/search/:item/:string_lng", async (req, res) => {

  try {

   const name= req.params.item;

   const longitude= req.params.string_lng;

  const item_list=await Products.findAll({where:{
    name:{[Op.like]:'%'+ name +'%'},

    longitude:{[Op.like]:'%'+ longitude +'%'}},include:[Users,Business]}
  
  
  );

  res.json(item_list);
  console.log(item_list);
  console.log(name)

}catch(err){
  console.log({ error: err });
}
  
}); */}


router.get("/search_geoloc/:pname/:lat/:lng", async (req, res) => {

  let imagePath =  baseURL;

  try {
   // const {name} = req.body;

    const name= req.params.pname;
 

   const lat= req.params.lat;

   const lng= req.params.lng;

  
   let lng_val=parseFloat(lng);



  

  
           
 

   let lng_plus_one=lng_val+0.009

   let lng_minus_one=lng_val-0.01


   let geo_loc='wide'

   //let item_lis_new_broad=null;



   console.log("THE NEW LONGITUDE IS "+parseFloat(lng_plus_one).toFixed(2))


   let new_long=parseFloat(lng_plus_one).toFixed(2)

   let new_lng_less_one=parseFloat(lng_minus_one).toFixed(2)


   
           
 

 



{/**const item_list=await Products.findAll({where:{
    name:{[Op.like]:'%'+ name +'%'},latitude:{[Op.like]:'%'+ lat +'%'},longitude:{[Op.like]:'%'+ lng +'%'},

    [Op.or]: [
      { name: { [Op.like]:'%'+ name +'%' } },
      { latitude: { [Op.like]: '%'+ lat +'%' } },
      { longitude: { [Op.like]: '%'+ new_long +'%' } },
    ]
  
  
  
  },include:[Users,Business]}
  
  ); */}



  // const item_list=await Products.findAll({
  //   where: {
  //     [Op.and]: [{ a: 5 }, { b: 6 }],
  //     [Op.or]: [{ a: 5 }, { b: 6 }]}, include:[Users,Business]}
  
  // );



  let item_lis_new=await Products.findAll({where:{
    [Op.and]: [
      {
        name: {
          [Op.like]: '%'+ name +'%'
        },
     
          // OR "email": 'xyz@mail.com'
      },
     
      {
          [Op.and]: [
              {
                  [Op.or]: [
                      {
                        "longitude": {[Op.like]:'%'+ lng +'%'}
                        
                      },
                      {
                         "longitude": {[Op.like]:'%'+ new_long +'%'}
                      },
                      {
                        "longitude": {[Op.like]:'%'+ new_lng_less_one +'%'}
                     }
                  ]
              },
              {
                  "latitude": { [Op.like]: '%'+ lat +'%' }
              }]
      }
  ]
  },include:[Users,Business]}
  
  );


  


   let notfound='ITEM NOT FOUND';
  if(!item_lis_new || item_lis_new==''){

     res.json({notfound:notfound});
     console.log('PRODUCT NOT FOUND')
  

   }

  else{

    res.json({item_list:item_lis_new,imagePath:imagePath});
  }

  // res.json({item_list:item_list,imagePath:imagePath});
 // console.log(item_list);
  //console.log(name)

}catch(err){
  console.log({ error: err });
}
  
});


router.get("/search_geoloc_wide/:pname/:lat/:lng", async (req, res) => {

  let imagePath =  baseURL;

  try {
   // const {name} = req.body;

    const name= req.params.pname;
 

   const lat= req.params.lat;

   const lng= req.params.lng;

  
   let lng_val=parseFloat(lng);

  
           
 

   let lng_plus_one=lng_val+0.009

   let lng_minus_one=lng_val-0.01


   let geo_loc='wide'

   //let item_lis_new_broad=null;



   console.log("THE NEW LONGITUDE IS "+parseFloat(lng_plus_one).toFixed(2))


   let new_long=parseFloat(lng_plus_one).toFixed(2)

   let new_lng_less_one=parseFloat(lng_minus_one).toFixed(2)
           
 


   let item_list =await Products.findAll({where:{
      name:{[Op.like]:'%'+ name +'%'},
  
      geo_location:{[Op.like]:'%'+ geo_loc +'%'}},include:[Users,Business]}
    
    );

   


   let notfound='ITEM NOT FOUND';
  if(!item_list || item_list==''){

     res.json({notfound:notfound});
     console.log('PRODUCT NOT FOUND')
  

   }

  else{

    res.json({item_list:item_list,imagePath:imagePath});
  }

  // res.json({item_list:item_list,imagePath:imagePath});
 // console.log(item_list);
  //console.log(name)

}catch(err){
  console.log({ error: err });
}
  
});




router.get("/search/:pname", async (req, res) => {

  let imagePath =  baseURL;

  try {
   // const {name} = req.body;

    const name= req.params.pname;
 

  const item_list=await Products.findAll({where:{
    name:{[Op.like]:'%'+ name +'%'}},include:[Users,Business]
  
  
  });

  res.json({item_list:item_list,imagePath:imagePath});
  console.log(item_list);
  console.log(name)

}catch(err){
  console.log({ error: err });
}
  
});

router.put("/updatestatus/:pId", async (req, res) => {
  
 
  const status=req.body.product_status;
 

  const change_status = await Products.update({status},{ where: { id: req.params.pId }});

  res.json(change_status);
  console.log(change_status);

  console.log("THE PRODUCT ID IS "+req.params.pId);
  console.log("THE PRODUCT STATUS IS "+status);
});



router.put("/widensearch/:id", async (req, res) => {
  
 
  const geo_location='wide';
 

  const wide_search = await Products.update({geo_location},{ where: { id: req.params.id }});

  res.json(wide_search);
  console.log(wide_search);

  console.log("THE PRODUCT ID IS "+req.params.id);
 
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

router.delete("/:pId", validateToken, async (req, res) => {
  const productId = req.params.productId;
  await Products.destroy({
    where: {
      id: productId,
    },
  });

  res.json("PRODUCT DELETED SUCCESSFULLY");
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'Images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)  
      const extname = fileTypes.test(path.extname(file.originalname))

      if(mimeType && extname) {
          return cb(null, true)
      }
      cb('Give proper files formate to upload')
  }
}).single('image')



app.use('/api/product', router);

}





