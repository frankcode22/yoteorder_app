
module.exports = (app) => {


    const express = require("express");
  
  const router=express.Router();
  
  const {Business,Users,Services,Staffs,Products,Customers,Suppliers,SupplyStores,Orders}=require("../models");
  
  //import _ from 'lodash';
  
  //const { baseURL } = require('../config');
  
  const BusinessProfileMiddleware =require('../middlewares/BusinessProfileMiddleware');
  
  const upload =require('../middlewares/BusinessProfileMiddleware');
  
  const cloudinary = require("../middlewares/cloudinary");
  
  const { validateToken } = require("../middlewares/AuthMiddleware");
  
  const baseURL=process.env.baseURL
  
  
  
  const credentials = {
    apiKey: 'dd4f7389fb18f079190d795898e4cf084e8161550371d664949dfecdbf1416d4',         // use your sandbox app API key for development in the test environment
    username: 'incredible',      // use 'sandbox' for development in the test environment
  };
  
  const Africastalking = require('africastalking')(credentials);
  
  // Initialize a service e.g. SMS
  const sms = Africastalking.SMS
  
  router.get("/",async(req,res)=>{
     const business_list= await Business.findAll();
  
    //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
     res.json(business_list);
  });
  
  router.get("/byId/:id", async (req, res) => {
      const id = req.params.id;
      const business = await Business.findByPk(id);
      res.json(business);
    });
  
    router.post("/bussinfor",async(req,res)=>{
  
  
      const {business_name,business_description,business_type,industry,location,contacts,address_line_1,latitude,longitude,city,state,country,status,email}=req.body;
  
      const user = await Users.findOne({ where: { username: email } });

      //const user_id=user.id;


      console.log("THE DATA IS:",user);

      console.log("THE USER ID IS:",user.id);


      try {
         
    const buss_infor= await  Suppliers.create({
      name:business_name,
      business_type:industry,
      supplier_type:industry,
      industry:industry,
      location:location,
      contacts:contacts,
      business_description:business_description,
  
      address_line_1:address_line_1,
      latitude:latitude,
      longitude:longitude,
      city:city,
      state:state,
      country:country,
  
      status:status,
      UserId:user.id,
     
    });

    res.json(buss_infor);
  
    console.log(buss_infor);
  
  
      }
   catch (err) {
        res.json({ error: err});
        console.error(err.message)
     
       
      }
  
  
  
  });
  
  
  router.post('/single-upload', BusinessProfileMiddleware.upload, async (req, res) => {
    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
  
    let ImageName=req.file.filename
  
    let businessId=req.body.businessId;
  
  
    console.log("THE IMAGE PATH IS:",imagePath);
    
  
  
    
    
    return res.json({imagePath:imagePath,
        ImageName:ImageName,businessId:businessId
    });
  });
  
  
  router.put('/update-profile/:bId', BusinessProfileMiddleware.upload, async (req, res) => {
  
    try {
    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
  
    let profile_photo=req.file.filename
  
    let businessId=req.body.businessId;
  
  
    let busss = await Business.findByPk(req.params.bId);
  
  
  
  
     
      // Delete image from cloudinary
      //await cloudinary.uploader.destroy(busss.cloudinary_id);
      // Upload image to cloudinary
      let result;
  
  
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path,{
          folder: businessId
      });
  
      console.log("THE CLOUDINARY URL IS "+ result.secure_url);
     
          
      console.log("THE CLOUDINARY ID IS "+result.public_id);
      }
  
      let cloudinary_url=result.secure_url;
  
      let cloudinary_id= result.public_id;
    
    
  
  
  
    
    const buss_ = await Business.update({profile_photo,cloudinary_url,cloudinary_id},{ where: { id: req.params.bId}}).then((image) => {
        try{
               
  
          
            console.log(image);
  
            console.log(profile_photo);
  
           // console.log(buss_);
  
            
  
            // res.json(image);
            
           
        }catch(e){
            console.log(e);
           // res.json({'err': e});
        }
    });
    
    res.json(buss_);
  
    console.log(buss_);
    }
  
    catch (err) {
      console.error(err.message)
    }
  
    
    // return res.json({imagePath:imagePath,
    //     ImageName:ImageName,businessId:businessId
    // });
  });
  
  
  
  
  router.put("/updateBuss/:id", async (req, res) => {
    try {
    const id = req.params.id;
  
    const business_name = req.body.business_name;
  
    const location = req.body.location;
    const business_type = req.body.business_type;
    const industry=req.body.industry;
  
    const contacts=req.body.contacts;
  
    const city = req.body.city;
    const state = req.body.city;
    const latitude=req.body.latitude;
    const longitude=req.body.longitude;
  
    const business_description=req.body.business_description;
    
  
    const buss = await Business.update({business_name,business_description,location,business_type,industry,city,contacts,latitude,longitude,state},{ where: { id: id }});
  
    res.json(buss);
    console.log(buss);
  
    console.log('The business ID is '+id);
    }
    catch (err) {
      console.error(err.message)
    }
  });
  
  
  
  
  router.get("/mybusiness_services", validateToken, async (req, res) => {
   
    const my_buss = await Business.findOne({ where: { UserId: req.user.id },include: [Users,Services]});
  
  
     res.json(my_buss);
    console.log(my_buss);
  
  
   // const servicesList= await Services.findAll({ where: { BusinessId: my_buss.BusinessId } });
   
    //console.log(servicesList);
  });
  
  
  router.get("/buss_services/:id", validateToken, async (req, res) => {
  
    const id = req.params.id;
   
    const my_buss_services = await Services.findAll({ where: { BusinessId: id },include: [Business]});
  
  
    res.json(my_buss_services);
    console.log(my_buss_services);
  
   // const servicesList= await Services.findAll({ where: { BusinessId: my_buss.BusinessId } });
   
    //console.log(servicesList);
  });
  
  
  router.get("/buss_details/:id", async (req, res) => {
  
    const id = req.params.id;
   
    const my_buss_services = await Business.findOne({ where: { id: id },include: [Services]});
  
  
    res.json(my_buss_services);
    console.log(my_buss_services);
  
   // const servicesList= await Services.findAll({ where: { BusinessId: my_buss.BusinessId } });
   
    //console.log(servicesList);
  });
  
  
  router.get("/getdetails/:id",validateToken, async (req, res) => {
  
    const id = req.params.id;
   
    const details_b = await Suppliers.findOne({ where: { id: id },include: [Users,SupplyStores]});
  
  
    res.json(details_b);
    console.log(details_b);
  
   // const servicesList= await Services.findAll({ where: { BusinessId: my_buss.BusinessId } });
   
    //console.log(servicesList);
  });


  router.get("/getsupplierdetails/:id",async (req, res) => {
  
    const id = req.params.id;
   
    const details_b = await Suppliers.findOne({ where: { id: id },include: [Users,SupplyStores]});
  
  
    res.json(details_b);
    console.log(details_b);
  
   // const servicesList= await Services.findAll({ where: { BusinessId: my_buss.BusinessId } });
   
    //console.log(servicesList);
  });
  
  
  
  router.get("/bestRated", async (req, res) => {
  
    try {
   
    const best_rated = await Business.findAll({include: [Users,Customers,Products,Services]});
  
  
    res.json(best_rated);
  
    }
    catch (err) {
      console.error(err.message)
    
    }
  });
  
  
  router.get("/getall",validateToken, async (req, res) => {
  
   
   
    //const vendors = await Suppliers.findAll({include: [Users,Customers,Products,Services]});

    const vendors = await Suppliers.findAll({include: [Users]});
  
  
    res.json(vendors);
    console.log(vendors);
  
   // const servicesList= await Services.findAll({ where: { BusinessId: my_buss.BusinessId } });
   
    //console.log(servicesList);
  });
  
  
  
  
  router.get("/mystaff", validateToken, async (req, res) => {
   
    const mystaff = await Business.findAll({ where: { UserId: req.user.id },include: [Staffs]});
   
  
    res.json(mystaff);
    console.log(mystaff);
  });
  
  
  router.post("/send_msg", validateToken, async (req, res) => {
  
   // const id = req.params.id;
   try {
   
  
   let buss_contacts=req.body.buss_contacts;
   const message=req.body.message;
  
  
  
  
  
  
   const id = req.body.businessId;
  // const business = await Business.findByPk(id);
  
   const details_b = await Business.findOne({ where: { id: id },include: [Users]});
  
  
  
   let formated_contact=details_b.User.phone_no;
  
  
  
   const options = {
    to: [formated_contact],
    //message: "Hello! "+name+" Welcome to PataMtaani, Your username is "+email+" and password is "+phone_no
  
    message:message
  }
  sms.send(options)
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });
  
   
  
  
    res.json(details_b);
  
     console.log("THE SUPPLIER NO IS"+formated_contact);
  
  
   
  } catch (err) {
    console.error(err.message)
  
   
  }
  
  
   
  });
  
  
  
  
  router.delete("/:bussId", validateToken, async (req, res) => {
      const bussId = req.params.bussId;
      await Business.destroy({
        where: {
          id: bussId,
        },
      });
    
      res.json("SUPPLIER DETAILS DELETED SUCCESSFULLY");
    });
  
  
    app.use('/api/suppliers', router);
  
  }
  
  
  
  
  
  