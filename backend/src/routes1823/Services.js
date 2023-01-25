
module.exports = (app) => {
  const express = require("express");

  const router=express.Router();
  
  const {Services,Business,Users}=require("../models");

  const businessServicesMiddleware = require('../middlewares/BusinessServicesMiddleware');

  const cloudinary = require("../middlewares/cloudinary");
  
  const { validateToken } = require("../middlewares/AuthMiddleware");

  const Sequelize=require('sequelize')

  const Op=Sequelize.Op


  const baseURL=process.env.baseURL
  
  
  router.post("/",async(req,res)=>{
      // const staff=req.body; 
  const {service_name,service_type,description,service_cost,latitude,longitude,cloudinary_url,subcatId,BusinessId}=req.body;

  let status='available'
  
  Services.create({
      service_name:service_name,
      service_type:service_type,
      description:description,
      service_cost:service_cost,
      
      latitude:latitude,
      longitude:longitude,
      status:status,
     
      cloudinary_url:cloudinary_url,
      ServiceTypeSubcategoryId:subcatId,
      BusinessId:BusinessId,
     
    });
    res.json("Service created Successfully");
  
  });



  router.post('/single-upload', businessServicesMiddleware.upload, async (req, res) => {
    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
  
    let ImageName=req.file.filename
  
    let businessId=req.body.businessId;
  
  
    console.log("THE IMAGE PATH IS:",imagePath);
    
  
  
    
    
    return res.json({imagePath:imagePath,
        ImageName:ImageName,businessId:businessId
    });
  });
  



  router.post('/addservice', businessServicesMiddleware.upload, async (req, res) => {

    try {

    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);

    //  const result = await cloudinary.uploader.upload(req.file.path, {
    //      upload_preset: 'dev_setups',
    //  });

    let buss_id=req.body.businessId;

      const result = await cloudinary.uploader.upload(req.file.path, {
         folder:`${buss_id}/services`
     });

   

 

    let ImageName=req.file.filename

    let businessId=req.body.businessId;

    let service_name=req.body.service_name;

    let userId=req.body.UserId;

    let service_type=req.body.service_type;

    let service_cost=req.body.service_cost;

    let type=req.body.type;

    let description=req.body.description;

    let latitude=req.body.latitude;

    let longitude=req.body.longitude;

  

    

    let subcatId=req.body.subcatId;


    let status='available';

   
    
    Services.create({
      service_name:service_name,
      service_type:service_type,
      description:description,
      service_cost:service_cost,
      
      latitude:latitude,
      longitude:longitude,
      status:status,
      cloudinary_url: result.secure_url,
      ServiceTypeSubcategoryId:subcatId,
      BusinessId:businessId,
     
    }).then((image) => {
        try{
               

            console.log('File uploaded successfully');

            console.log(image);

            console.log("THE IMAGE NAME IS:",ImageName);

            console.log("THE CLOUDINARY URL IS "+ result.secure_url);

        
            console.log("THE CLODINARY ID IS "+result.public_id);
            
           
        }catch(e){
            console.log(e);
           // res.json({'err': e});
        }
    });
    
    
    return res.json({imagePath:imagePath,cloudinary_url:result.secure_url,
        ImageName:ImageName,businessId:businessId
    });

} catch (err) {
    console.error(err.message)
  }
});


router.put('/update-service/:sId', businessServicesMiddleware.upload, async (req, res) => {

  try {
  let imagePath = req.file.path.replace("public", baseURL);

  imagePath = imagePath.split('src')[1].substring(1, imagePath.length);


  let service = await Services.findByPk(req.params.sId);

  let buss_id=req.body.businessId;
    // Delete image from cloudinary
   // await cloudinary.uploader.destroy(service.cloudinary_id);
    // Upload image to cloudinary
    let result;


    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path,{
        folder:`${buss_id}/services`
    });

   
    }

 


  let cloudinary_url=result.secure_url;

  let cloudinary_id= result.public_id;

  let product_image=req.file.filename

  let ImageName=req.file.filename

  let businessId=req.body.businessId;

  let service_name=req.body.service_name;


  let service_type=req.body.service_type;

  let service_cost=req.body.service_cost;

  let type=req.body.type;

  let description=req.body.description;

  let latitude=req.body.latitude;

  let longitude=req.body.longitude;



  

  let ServiceTypeSubcategoryId=req.body.subcatId;


  let status='available';


  // const product = await Products.update(req.body, { where: { id: req.params.pId }})

  // //res.status(200).send(product)

  // res.json(product);

 

  
  const service_ = await Services.update({
    service_name,
    service_type,
    description,
      service_cost,
      cloudinary_id,
      cloudinary_url,
      latitude,
      longitude,
      status,
      ServiceTypeSubcategoryId,
     
  },{ where: { id: req.params.sId}}).then((image) => {
      try{
             

          console.log('Service updated');

          console.log(image);

          console.log(product_image);

          // res.json(image);
          
         
      }catch(e){
          console.log(e);
         // res.json({'err': e});
      }
  });
  
 // res.json(service_);

  console.log(service_);
  
  return res.json({service:service_,imagePath:imagePath,cloudinary_url:result.secure_url,
    ImageName:ImageName,businessId:businessId
});

} catch (err) {
  console.log(err);
}
});

  
  
  
  router.get("/getbyId/:sId", async (req, res) => {
    const id = req.params.sId;
    const service_ = await Services.findByPk(id);
    res.json(service_);
  });



  router.get("/search_gategory/:service_type", async (req, res) => {
    const service_type = req.params.service_type;
    const item_list =await Services.findAll({where:{
      service_type:{[Op.like]:'%'+ service_type +'%'}},include:[Business]}
    
    );
    res.json(item_list);
  });

  router.get("/search_geoloc/:service_type/:lat/:lng", async (req, res) => {

    // let imagePath =  baseURL;
  
    try {
     // const {name} = req.body;
  
      const service_type= req.params.service_type;
   
  
     const lat= req.params.lat;
  
     const lng= req.params.lng;
  
     let lat_val=parseFloat(lat);
     let lng_val=parseFloat(lng);
  
    
             
   
  
     let lng_plus_one=lng_val+0.009
  
     let lng_minus_one=lng_val-0.01
  
  
     let geo_loc='wide'
  
   
  
  
     console.log("THE NEW LONGITUDE IS "+parseFloat(lng_plus_one).toFixed(2))
  
  
     let new_long=parseFloat(lng_plus_one).toFixed(2)
  
     let new_lng_less_one=parseFloat(lng_minus_one).toFixed(2)


     let final_lat=parseFloat(lat_val).toFixed(2)
             
   
  
   
  

  
  
    let item_lis_new=await Services.findAll({where:{
      [Op.and]: [
        {
          service_type: {
            [Op.like]: '%'+ service_type +'%'
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
                    "latitude": { [Op.like]: '%'+ final_lat +'%' }
                }]
        }
    ]
    },include:[Business]}
    
    );
  
  
    
  
  
     let notfound='ITEM NOT FOUND';
    if(!item_lis_new || item_lis_new==''){
  
       res.json({notfound:notfound});
       console.log('PRODUCT NOT FOUND')
    
  
     }
  
    else{
  
      //res.json({item_list:item_lis_new,imagePath:imagePath});

      res.json(item_lis_new);
    }
  
 
  
  }catch(err){
    console.log({ error: err });
  }
    
  });


  router.get("/searchgeoloc_catid/:catId/:lat/:lng", async (req, res) => {
    try {
    
  
    const categoryId= req.params.catId;
     const lat= req.params.lat;
  
     const lng= req.params.lng;
  
     let lat_val=parseFloat(lat);
     let lng_val=parseFloat(lng);
  
     let lng_plus_one=lng_val+0.009
  
     let lng_minus_one=lng_val-0.01
  
  
     let geo_loc='wide'
  
     //console.log("THE NEW LONGITUDE IS "+parseFloat(lng_plus_one).toFixed(2))
  

     let new_long=parseFloat(lng_plus_one).toFixed(2)
  
     let new_lng_less_one=parseFloat(lng_minus_one).toFixed(2)


     let final_lat=parseFloat(lat_val).toFixed(2)
 
    let item_lis_new=await Services.findAll({where:{
      [Op.and]: [
        {
          ServiceTypeSubcategoryId: {
            [Op.like]: '%'+ categoryId +'%'
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
                    "latitude": { [Op.like]: '%'+ final_lat +'%' }
                }]
        }
    ]
    },include:[Business]}
    
    );
  
  
    
  
  
     let notfound='ITEM NOT FOUND';
    if(!item_lis_new || item_lis_new==''){
  
       res.json({notfound:notfound});
       console.log('PRODUCT NOT FOUND')
    
  
     }
  
    else{
  
      //res.json({item_list:item_lis_new,imagePath:imagePath});

      res.json(item_lis_new);
    }
  
 
  
  }catch(err){
    console.log({ error: err });
  }
    
  });
  
  
  
  
  router.put("/update_service/:sId", async (req, res) => {
   
    const service_name = req.body.service_name;
    const service_type = req.body.service_type;
    const description=req.body.description;
    const service_cost=req.body.service_cost;
   
  
    
   
    const service_ = await Services.update({service_name,service_type,description,service_cost},{ where: { id: req.params.sId}});
  
    res.json(service_);
    console.log(service_);
  });
  
  app.use('/api/service', router);

}




