
module.exports = (app) => {
  const express = require("express");

  const router=express.Router();
  
  const {Services,Business,Users}=require("../models");
  
  const { validateToken } = require("../middlewares/AuthMiddleware");

  const Sequelize=require('sequelize')

  const Op=Sequelize.Op
  
  
  router.post("/",async(req,res)=>{
      // const staff=req.body; 
  const {service_name,service_type,description,service_cost,latitude,longitude,cloudinary_url,BusinessId}=req.body;

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
      BusinessId:BusinessId,
     
    });
    res.json("Service created Successfully");
  
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




