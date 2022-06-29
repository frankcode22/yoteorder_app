const express = require("express");
const router = express.Router();
const { Users,Bookings,Properties,Payouts,Products,Orders} = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
const db = require("../models");


const credentials = {
  apiKey: 'dd4f7389fb18f079190d795898e4cf084e8161550371d664949dfecdbf1416d4',         // use your sandbox app API key for development in the test environment
  username: 'incredible',      // use 'sandbox' for development in the test environment
};

const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = Africastalking.SMS

router.post("/",async(req,res)=>{
 

  const{first_name,last_name,email,phone_no,country,state,city,password,profile_image,account_type,role}=req.body;

  
 var status="Active";


  bcrypt.hash(password,10).then((hash)=>{

    
    Users.create({
      first_name:first_name,
      last_name:last_name,
      username:email,
      email:email,
      phone_no:phone_no,
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

    // Use the service
const options = {
  to: [phone_no],
  message: "Hello! "+first_name+" Welcome to KilimoMazao, Your username is "+email+" and password is "+phone_no
}

// Send message and capture the response or error
sms.send(options)
  .then( response => {
      console.log(response);
  })
  .catch( error => {
      console.log(error);
  });
  });


});


router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't Exist" });

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






router.get("/mypayouts", validateToken, async (req, res) => {
 
  const payouts = await Payouts.findAll({
    where: { UserId: req.user.id },include: [Users,Properties,Bookings]
  });
  res.json(payouts);
});


router.get("/allusers",async(req,res)=>{
  const usersList= await Users.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(usersList);
});

router.get("/farmers",async(req,res)=>{

  const role="Farmer";
  const usersList= await Users.findAll({ where: { role: role } });

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(usersList);
});



router.get("/customers",async(req,res)=>{
  const usersList= await Users.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(usersList);
});

router.get("/getuser/:user_id", async (req, res) => {
  const id = req.params.user_id;
  const user = await Users.findByPk(id);
  res.json(user);
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



// router.post("/login", async (req, res) => {

//   const {username, password } = req.body;

//   const user = await Users.findOne({ where: { username: username } });

//   if(!user) res.json({error:"User Does not exist"});


//   bcrypt.compare(password, user.password).then((match) => {
//     if (!match){

//         res.json({ error: "Wrong Username And Password Combination" });

//     } 

//     else{
//         const accessToken = sign(
//             { username: user.username, id: user.id},
//             "importantsecret"
//           );
//           res.json({ token: accessToken, username: username,first_name:user.first_name,last_name:user.last_name,phone:user.phone, id: user.id});

//     }

//   });

// });


module.exports=router;