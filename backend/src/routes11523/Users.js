
module.exports = (app) => {

  const express = require("express");
const router = express.Router();
const { Users,Bookings,Properties,Payouts,Products,Orders,Retailers,Business,Suppliers,SupplyStores,OrdersFromRetailors,Customers,RetailerSales,Services,Staffs,Notifications} = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
const db = require("../models");
const baseURL=require('../config');

const axios = require('axios');


const credentials = {
  apiKey: 'dd4f7389fb18f079190d795898e4cf084e8161550371d664949dfecdbf1416d4',         // use your sandbox app API key for development in the test environment
  username: 'incredible',      // use 'sandbox' for development in the test environment
};

const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = Africastalking.SMS

router.post("/",async(req,res)=>{
 
  try {
  const{name,last_name,email,phoneNo,country,state,city,profile_image,account_type,password,role}=req.body;



  let formated_contact='+254'+phoneNo.substring(1);

  var final_pwd=password;
  
 var status="Active";


 const user = await Users.findOne({ where: { email: email } });

 if(user){
  res.json({ error: "The user already exists" });
 }
else{



  bcrypt.hash(final_pwd,10).then((hash)=>{

    
    Users.create({
      first_name:name,
      last_name:last_name,
      username:email,
      email:email,
      phone_no:formated_contact,
      role:role,
      country:country,
      state:state,
      city:city,
      status:status,
      account_type:account_type,
      profile_image:profile_image,
      password:hash

    });
    res.json("USER SAVED");

    console.log("FORMATED PHONE NUMBER IS"+formated_contact);

    var jsonD={
      "api_key":"r4DYiGq3bOgMWAeJnyl7KwpaTX6vhcRIf92j81SVtQLP0msod5EBZUFxHNkzCu",
        "service_id":0,
        "mobile":formated_contact,
        "response_type":"json",
        "shortcode":"PataMtaani",
        "message":"Hello! "+name+" Welcome to PataMtaani, Your username is "+email+" .Kindly login and setup your account",
        "date_send":"2021-01-13 16:40:00"
      }
      

    axios.post('https://api.tililtech.com/sms/v3/sendsms',jsonD).then(response => {
             console.log(response);
         })
         .catch( error => {
             console.log(error);
         });

    // Use the service
// const options = {
//   to: [formated_contact],
//   //message: "Hello! "+name+" Welcome to PataMtaani, Your username is "+email+" and password is "+phone_no

//   message: "Hello! "+name+" Welcome to PataMtaani, Your username is "+email+" .Kindly login and setup your account"
// }

// Send message and capture the response or error
// sms.send(options)
//   .then( response => {
//       console.log(response);
//   })
//   .catch( error => {
//       console.log(error);
//   });
  });

}

} catch (err) {
  console.log(err)

  res.json({error:'YOU HAVE AN ERROR',err});
}


});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;


  if(password=='' ){

    res.json({ error: "Please enter username or password" });

  }

  else{

    const user = await Users.findOne({ where: { username: username } });

    if (!user){

      res.json({ error: "User Doesn't Exist" });

      return
    }
    
   
  
    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) {
        res.json({ error: "Wrong Username And Password Combination" });
      }
      else{
  
      const accessToken = sign(
        { username: user.username,first_name: user.first_name,phone_no:user.phone_no,role:user.role,email:user.email, id: user.id },
        "importantsecret"
      );
      res.json({ token: accessToken, username: username, first_name: user.first_name,phone_no:user.phone_no,role:user.role,email:user.email, id: user.id });
      // console.log(res.json({ token: accessToken, username: username,  first_name: user.first_name,phone_no:user.phone_no,role:user.role,email:user.email, id: user.id }))
    }
    });

  }


  


});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
  // console.log(req.user);
});



router.put("/updateuser",validateToken, async (req, res) => {
  
  const first_name = req.body.first_name;
  const last_name=req.body.last_name;
  const username=req.body.username;
  const email=req.body.email;

  const country=req.body.country;
  const city=req.body.city;
 
  const user = await Users.update({first_name,last_name,username,email,country,city},{ where: { id: req.user.id }});

  res.json(user);
  console.log(user);
});






router.get("/mybookings", validateToken, async (req, res) => {
  const myBookingList = await Users.findOne({ where: { id: req.user.id },include: [Bookings] });

  const myBookings = await Bookings.findAll({
    where: { user_id: req.user.id },include: [Properties]
  });
  res.json({myBookingList:myBookingList,myBookings:myBookings});
});


router.get("/myproducts", validateToken, async (req, res) => {
  const products = await Products.findAll({
    where: { UserId: req.user.id },include: [Users]
  });
  res.json(products);
});



router.get("/getmyorders", validateToken, async (req, res) => {
  const orders = await Orders.findAll({
    where: { UserId: req.user.id },include: [Users]
  });
  res.json(orders);
});


router.get("/mybizz",validateToken,async (req, res) => {

 
  try {

   let imagePath =  baseURL;

 
  const my_buss = await Retailers.findOne({ where: { UserId: req.user.id},include: [Users,Staffs,Services,Customers,Orders,Products,Notifications,Bookings,RetailerSales]});
 

  //res.json(my_buss);
 
  res.json({my_buss:my_buss,imagePath:imagePath});
 // console.log(my_buss);
} catch (err) {
    console.error(err.message)
   // res.json({error:'ERROR WHILE FETCHING YOUR BUSINESS DATA',err});
  }
});


router.get("/mystore",validateToken,async (req, res) => {

 
  try {

   let imagePath =  baseURL;

 
  const my_buss = await Suppliers.findOne({ where: { UserId: req.user.id},include: [Users,Notifications,SupplyStores,OrdersFromRetailors]});
 

  //res.json(my_buss);
 
  res.json({my_buss:my_buss,imagePath:imagePath});
  //console.log(my_buss);
} catch (err) {
    console.error(err.message)
   // res.json({error:'ERROR WHILE FETCHING YOUR BUSINESS DATA',err});
  }
});



router.get("/mybusiness",validateToken,async (req, res) => {

 
  try {

   let imagePath =  baseURL;

 
  const my_buss = await Business.findOne({ where: { UserId: req.user.id},include: [Users,Staffs,Services,Orders,Products,Notifications,Bookings,RetailerSales]});
 

  //res.json(my_buss);
 
  res.json({my_buss:my_buss,imagePath:imagePath});
 // console.log(my_buss);
} catch (err) {
    console.error(err.message)
   // res.json({error:'ERROR WHILE FETCHING YOUR BUSINESS DATA',err});
  }
});




router.get("/mystore",validateToken,async (req, res) => {

 
  try {

   let imagePath =  baseURL;

 
  const my_buss = await Suppliers.findOne({ where: { UserId: req.user.id},include: [Users,SupplyStores,OrdersFromRetailors,Notifications]});
 

  //res.json(my_buss);
 
  res.json({my_buss:my_buss,imagePath:imagePath});
 // console.log(my_buss);
} catch (err) {
    console.error(err.message)
   // res.json({error:'ERROR WHILE FETCHING YOUR BUSINESS DATA',err});
  }
});


router.get("/mybusinesses", validateToken, async (req, res) => {
 
  const all_my_buss = await Business.findAll({ where: { UserId: req.user.id }});
 

  res.json(all_my_buss);
 // console.log(all_my_buss);
});









router.get("/mypayouts", validateToken, async (req, res) => {
 
  const payouts = await Payouts.findAll({
    where: { UserId: req.user.id },include: [Users,Properties,Bookings]
  });
  res.json(payouts);
});






router.get("/allusers",validateToken,async(req,res)=>{
  const usersList= await Users.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(usersList);
});

router.get("/vendors",async(req,res)=>{

  const role='vendor';
  const usersList= await Users.findAll({ where: { role: role } });

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(usersList);
});



router.get("/customers",async(req,res)=>{
  const role='customer';
  const usersList= await Users.findAll({ where: { role: role } });

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(usersList);
});

router.get("/getuser/:user_id", async (req, res) => {
  const id = req.params.user_id;
  const user = await Users.findByPk(id);
  res.json(user);
});



router.post("/send_msg/:user_id", validateToken, async (req, res) => {

  // const id = req.params.id;
  try {
  
  const message=req.body.message;



  const id = req.params.user_id;
  const details_b = await Users.findByPk(id);
 
 
 
 
  let formated_contact=details_b.phone_no;
 
 
 
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
 
    console.log("THE VENDOR NO IS"+formated_contact);
 
 
  
 } catch (err) {
   console.error(err.message)
 
  
 }
 
 
  
 });


// router.get("/basicinfo/:id", async (req, res) => {
//   const id = req.params.id;

//   const basicInfo = await Users.findByPk(id, {
//     //To exclude some db fields we use the attribute function
//     attributes: { exclude: ["password"] },
//   });

//   res.json(basicInfo);
// });


router.get("/basicinfo",validateToken, async (req, res) => {
  const id = req.user.id;

  const basicInfo = await Users.findByPk(id, {
    //To exclude some db fields we use the attribute function
    attributes: { exclude: ["password"] },
  });
  res.json(basicInfo);
});


router.get("/searchcleaners", async (req, res) => {


  try {

  const users=await db.sequelize.query("SELECT * FROM users where role LIKE 'cleaner%'",{
    model: Users,
    mapToModel: true, // pass true here if you have any mapped fields

    replacements:{name:'Test Prop'}


  });

 
  res.json(users);
  console.log(users);

}catch(err){
  console.log({ error: err });
}

  
});




app.use('/api/users', router);



}





