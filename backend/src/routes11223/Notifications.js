const express = require("express");
const router = express.Router();
const { Messages,Notifications } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");





router.post("/",async(req,res)=>{




    const {subject,from_, message,receiver_email, UserId,BusinessId}=req.body;

   
   
    const messages= await Notifications.create({
        subject:subject,
        message:message,

        from_:from_,
        receiver_email:receiver_email,
        Read:0,
        archive:0,
        UserId:UserId,
        BusinessId:BusinessId,
       
      });
     
      res.json(messages);
      

      console.log(messages);
  
});



router.get("/notifications",validateToken, async (req, res) => {

let id=10;
  const my_notifications = await Notifications.findAll({ where: { BusinessId: id }});
 

  res.json(my_notifications);
  console.log(my_notifications);
});


router.get("/allnotifications",async(req,res)=>{
  const messageList= await Notifications.findAll();

 // const likedPosts = await Likes.findAll({where: {UserId:req.user.id }});

 //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
  res.json(messageList);
});


module.exports=router;