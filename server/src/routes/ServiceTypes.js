
module.exports = (app) => {
    const express = require("express");
  
    const router=express.Router();
    
    const {Services,Business,ServiceTypes,ServiceTypeSubcategories,Users}=require("../models");
    
    const { validateToken } = require("../middlewares/AuthMiddleware");
  
    const Sequelize=require('sequelize')
  
    const Op=Sequelize.Op
    
    
    router.post("/",async(req,res)=>{
        // const staff=req.body; 
    const {service_name,description,UserId}=req.body;
  
    let status='available'
    
    ServiceTypes.create({
        name:service_name,
        
        description:description,
        added_by:UserId,
        
        UserId:UserId,
       
      });
      res.json("Service created Successfully");
    
    });



    router.get("/alltypes",async(req,res)=>{
        const item_list= await ServiceTypes.findAll({include: [Users]
        });
      
        res.json(item_list);
      });



      router.get("/bestRated", async (req, res) => {

        try {
       
        const best_rated = await ServiceTypes.findAll();
      
      
        res.json(best_rated);
      
        }
        catch (err) {
          console.error(err.message)
        
        }
      });
    
    
    
    
    router.get("/getbyId/:sId", async (req, res) => {
      const id = req.params.sId;
      const service_ = await ServiceTypes.findOne({ where: { id: id },include: [ServiceTypeSubcategories]
       });
      res.json(service_);
    });



    router.post("/subcategory",async(req,res)=>{
        // const staff=req.body; 
    const {name,description,ServiceTypeId,UserId}=req.body;
  
    let status='available'
    
    ServiceTypeSubcategories.create({
        name:name,
        
        description:description,
        added_by:UserId,
        ServiceTypeId:ServiceTypeId,
        
        UserId:UserId,
       
      });
      res.json("Service created Successfully");
    
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
    
      
       let lng_val=parseFloat(lng);
    
      
               
     
    
       let lng_plus_one=lng_val+0.009
    
       let lng_minus_one=lng_val-0.01
    
    
       let geo_loc='wide'
    
     
    
    
       console.log("THE NEW LONGITUDE IS "+parseFloat(lng_plus_one).toFixed(2))
    
    
       let new_long=parseFloat(lng_plus_one).toFixed(2)
    
       let new_lng_less_one=parseFloat(lng_minus_one).toFixed(2)
               
     
    
     
    
  
    
    
    
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
                      "latitude": { [Op.like]: '%'+ lat +'%' }
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
    
    
    
    router.put("/update_service/:serviceId", async (req, res) => {

      
     
      const name = req.body.service_name;
     
      const description=req.body.description;
      const UserId=req.body.UserId;
     
    
      
     
      const service_ = await ServiceTypes.update({name,description,UserId},{ where: { id: req.params.serviceId}});
    
      res.json(service_);
      console.log(service_);
    });
    
    app.use('/api/servicetype', router);
  
  }
  
  
  
  
  