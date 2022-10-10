
module.exports = (app) => {

  const express = require("express");
const router = express.Router();
const { Bookings,Properties,Users,PropertyAddress,PropertyPrice,Payments,PropertyDates} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

const fs = require('fs')

const moment = require('moment');  




{/*router.post("/",async(req,res)=>{



    const {PropertyId, code, UserId, user_id, start_date, end_date, status, guest, total_night, per_night, custom_price_dates, 
        base_price, cleaning_charge, guest_charge, service_charge, security_money, host_fee, total, booking_type, currency_code,
         cancellation, transaction_id, payment_method_id, accepted_at, expired_at, declined_at, cancelled_at, 
    cancelled_by, added_by, confirm_arrival_status, deleted_status, category_id}=req.body;

   
    Bookings.create({
        property_id:PropertyId,
        code:code,
      
        host_id:UserId,
        user_id:user_id,
        
        start_date:start_date,
        end_date:end_date,
        guest:guest,
        amenities:amenities,
        property_type:property_type,
        space_type:space_type,


        total_night:total_night,
        booking_type:booking_type,
        minimum_stay:minimum_stay,
        policy_id:policy_id,
        featured:featured,
        cancellation:cancellation,


        transaction_id:transaction_id,
        payment_method_id:payment_method_id,
        accepted_at:accepted_at,
        expired_at:expired_at,
        declined_at:declined_at,
        cancelled_at:cancelled_at,

        status:status,
        UserId:UserId,


        per_night:per_night,
        custom_price_dates:custom_price_dates,
        base_price:base_price,


       
        cleaning_charge:cleaning_charge,
        guest_charge:guest_charge,
        service_charge:service_charge,
        security_money:security_money,
        host_fee:host_fee,
        total:total,


        currency_code:currency_code,
        cancelled_by:cancelled_by,
        added_by:added_by,
        confirm_arrival_status:confirm_arrival_status,
        deleted_status:deleted_status,
        category_id:category_id,
      
      


       
      });
      res.json("Success");
  
});*/}


router.post("/",async(req,res)=>{
    

  
    const {title,UserId,CustomerId,start,end,guest,desc}=req.body;

    var booking_type=1;

    var security_fee=20;

    const thisMonth = new Date().getMonth()



    let s = start;
    let d = new Date(s);

   

    var std_obj=new Date(2022,d.getMonth(), d.getDate(),  d.getHours(), d.getMinutes());

    var std_str=std_obj.toString();

    let sd = end;
    let dd = new Date(sd);

    var end_obj=new Date(2022,dd.getMonth(), dd.getDate(), dd.getHours(), dd.getMinutes());

    var end_str=end_obj.toString();


  


   

    try {
const booking= await  Bookings.create({
        title:title,
        UserId:UserId,
        CustomerId:CustomerId,
        start:std_str,
        end:end_str,
        guest:guest,
       
       
        booking_type:booking_type,

      
        

        desc:desc,
       
    
       
      });






      var mydates = {"id": booking.id, "title":title,  "start":std_str,
       "end":end_str, "desc": desc};



       const { readFileSync } = require('fs');
  
       const data = readFileSync('./caldates.json');


       var obj = JSON.parse(data);
       obj.push(mydates);

       var strDates = JSON.stringify(obj);

      console.log(JSON.parse(data));


           fs.writeFile('./caldates.json', strDates,err => {

            if (err) {
                      console.log('Error writing file', err)
                  } else {
                       console.log('Successfully wrote file')
                  }
           
              
           });

      


     

      //console.log('THE DATE OBJECT IS'+start)

    //   const thisMonth = new Date().getMonth()


    //   const customer = [{
    //     "id": 11, "title":title,  start:std_str,
    //     end:end_str, "desc": desc,
    // }]
    // const jsonString = JSON.stringify(customer)
    // fs.writeFile('./caldates.json', jsonString, err => {
    //     if (err) {
    //         console.log('Error writing file', err)
    //     } else {
    //         console.log('Successfully wrote file')
    //     }
    // })

   



      res.json(booking);
    
      console.log(booking);

    } catch (err) {
        console.error(err.message)

        console.log(start);

        console.log(end);
      }
    
  
});



// router.get("/bookings",async(req,res)=>{
//   // const bookingList= await Bookings.findAll({include:[Properties,Users]});

//   const bookingList= await Bookings.findAll();

  
//   //const usersList = await Users.findAll();

//    console.log(bookingList)

//   res.json(bookingList);
//    //res.json(bookingList);
// });



router.get("/bookings",async(req,res)=>{
  
  const { readFileSync } = require('fs');
  
const data = readFileSync('./caldates.json');
console.log(JSON.parse(data));

   //console.log(bookingList)

  res.json(JSON.parse(data));
   //res.json(bookingList);
});




router.get("/search", async (req, res) => {

  try {

   const id= req.body.UserId;

  const user_bookings=await Bookings.findAll({ where: {UserId: id }});

  res.json(user_bookings);
  console.log(user_bookings);
  console.log(id)

}catch(err){
  console.log({ error: err });
}
  
});







router.get("/getbookingById/:id", async (req, res) => {
	const id = req.params.id;
	const booking = await Bookings.findByPk(id);

  const user = await Users.findByPk(booking.user_id);

	console.log("THE USER ID IS",user.id)


  const propertyaddress = await PropertyAddress.findOne({ where: { PropertyId: booking.PropertyId } });

	console.log("THE PROPERTY FROM ADDRESS ID IS",propertyaddress.PropertyId)


  const property = await Properties.findOne({ where: { id: booking.PropertyId } });

	console.log("THE PROPERTY ID IS",property.id)


  const owner = await Users.findOne({ where: { id: property.UserId } });

	console.log("THE HOST ID IS",property.id)



  const propertyprice = await PropertyPrice.findOne({ where: { PropertyId: property.id } });

	console.log("THE PROPERTY ID IS",propertyprice.PropertyId)



  res.json({ booking: booking,user:user,propertyaddress:propertyaddress,property:property,owner:owner,propertyprice:propertyprice});
  
	// res.json(booking);
  });



  router.put("/updatebooking/:id", async (req, res) => {
    const id = req.params.id;
    const PropertyId = req.body.PropertyId;
    const user_id=req.body.user_id;
    const start_date=req.body.start_date;

    const end_date = req.body.end_date;
    const total_night=req.body.total_night;
    const guest=req.body.guest;

    const per_night=req.body.per_night;
    const total=req.body.total;
  
  
    const booking_up = await Bookings.update({PropertyId,user_id,start_date,end_date,total_night,per_night,total,guest},{ where: { id: id }});
  
    res.json(booking_up);
    console.log(booking_up);
  });


  router.put("/confirm_arrival/:id", async (req, res) => {
    const id = req.params.id;
   
    const confirm_arrival_status=req.body.confirm_arrival_status;
   
  
    const status_confirm = await Bookings.update({confirm_arrival_status},{ where: { id: id }});
  
    res.json(status_confirm);
    console.log(status_confirm);
  });

  router.put("/update_status/:id", async (req, res) => {
    const id = req.params.id;
   
    const status=req.body.status;
   
  
    const change_status = await Bookings.update({status},{ where: { id: id }});
  
    res.json(change_status);
    console.log(change_status);
  });


  router.put("/update_cancellation/:id", async (req, res) => {
    const id = req.params.id;
   
    const status=req.body.status;
    const cancelled_at=req.body.cancelled_at;
   
  
    const change_status = await Bookings.update({status,cancelled_at},{ where: { id: id }});
  
    res.json(change_status);
    console.log(change_status);
  });

  router.get("/booking_payments/:id", async (req, res) => {
    const id = req.params.id;

    const booking = await Bookings.findOne({ where: { id: id },include:[Payments] });

  
    res.json(booking);
    console.log(booking);
  });



  router.get("/customerAppointments/:id", async (req, res) => {
    const id = req.params.id;

    const booking = await Bookings.findAll({ where: { CustomerId: id },include:[Payments] });

  
    res.json(booking);
    console.log(booking);
  });

  app.use('/api/bookings', router);


}

