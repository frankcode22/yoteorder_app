
module.exports = (app) => {

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


  router.get("/getbyId/:sId", async (req, res) => {
    const id = req.params.sId;
    const staff_ = await Staffs.findByPk(id);
    res.json(staff_);
  });
  

  router.put("/updatestaff/:staffId", async (req, res) => {
    const id = req.params.staffId;


  
    const staff_name = req.body.staff_name;
    const email=req.body.email;
    const phone_no=req.body.phone_no;
   
   
   
  
  
    const staff_ = await Staffs.update({staff_name,email,phone_no},{ where: { id: req.params.staffId}});
  
    res.json(staff_);
    console.log(staff_);
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

app.use('/api/staff', router);
}





