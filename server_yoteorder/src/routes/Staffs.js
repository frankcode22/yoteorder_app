const express = require("express");

const router=express.Router();

const {Staffs}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");





router.post("/",async(req,res)=>{
    // const staff=req.body;
    
   
const {staff_name,phone_no,email,BusinessId}=req.body;

Staffs.create({
    staff_name:staff_name,
    phone_no:phone_no,
    email:email,
    BusinessId:BusinessId,
   
  });
  res.json("Staff created Successfully");

});


router.get("/byBussId/:id", async (req, res) => {
    const id = req.params.id;
    const staffList = await Staffs.findAll({
      where: { BusinessId: id },
    });
    res.json(staffList);
  });


  router.get("/mystaff",async(req,res)=>{
    const staffList= await Staffs.findAll();
  
    res.json(staffList);
  });


  router.delete("/:staffId", validateToken, async (req, res) => {
    const staffId = req.params.staffId;
  
    await Staffs.destroy({
      where: {
        id: staffId,
      },
    });

    res.json("DELETED SUCCESSFULLY");
});










module.exports=router;