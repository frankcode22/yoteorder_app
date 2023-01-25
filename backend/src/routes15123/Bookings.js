
module.exports = (app) => {

  const express = require("express");
const router = express.Router();
const { Bookings,Properties,Users,PropertyAddress,PropertyPrice,Payments,Services,Business} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

const fs = require('fs')

const moment = require('moment');  




const credentials = {
  apiKey: 'dd4f7389fb18f079190d795898e4cf084e8161550371d664949dfecdbf1416d4',         // use your sandbox app API key for development in the test environment
  username: 'incredible',      // use 'sandbox' for development in the test environment
};

const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = Africastalking.SMS



router.post("/",async (req,res)=>{

    

    const {title,start,end,guest,desc,item_name,order_description,customer_phone_no,order_status,orderId,ServiceId,quantity_ordered,customer_lat,customer_longitude,status,UserId,BusinessId,CustomerId}=req.body;

    //let formated_contact='+254'+customer_phone_no.substring(1);
   let start_time=new Date()

   let end_time=new Date()


    let request_type='urgent'

    try {
const order= await  Bookings.create({
  
  
    orderId:orderId,
    ServiceId:ServiceId,
   
    title:item_name,
    CustomerId:CustomerId,
    start:start_time,
    end:end_time,
  
    request_type:request_type,

  
    desc:order_description,
     status:order_status,
    UserId:UserId,
    BusinessId:BusinessId,
       
      })

      res.json(order);

      const options = {
        to: [customer_phone_no],
        message: "Your order for "+item_name+" has been initiated successfully.The vendor will contact you shortly"
      }
      
      // Send message and capture the response or error
      sms.send(options)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });


    const bizz_details = await Business.findOne({ where: { id: BusinessId },include: [Users]});



    console.log("THE USER PHONE NO IS",bizz_details.User.phone_no);



    const options_bizz = {
      to: [bizz_details.User.phone_no],
      message: "You have a new order for "+item_name+" The orderId is "+orderId+". Kindly login and confirm the order. Please maintain professionalism "
    }
    
    // Send message and capture the response or error
    sms.send(options_bizz)
      .then( response_bizz => {
          console.log(response_bizz);
      })
      .catch( error => {
          console.log(error);
      });




    

      console.log("YOUR ORDER IS",order);

    } catch (err) {
        console.error(err.message)
      }
    
  
});


router.post("/bookeservice",async(req,res)=>{
    

  
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


router.get("/myorders", validateToken, async (req, res) => {
  try {
  const my_orders = await Bookings.findAll({
    where: { UserId: req.user.id},include:[Users,Business,Services]
  });
  res.json(my_orders);
  console.log(my_orders)

}catch(err){
  console.log({ error: err });
}
});


router.get("/servicerequests", validateToken, async (req, res) => {
  try {
 
  const my_buss = await Business.findOne({ where: { UserId: req.user.id },include: [Users,Staffs,Customers,Bookings]});


  const orders_ = await Bookings.findAll({ where: { BusinessId: my_buss.id}, order: [
    ["id", "DESC"]
  ],include: [Users,Customers,Services]});
 

  res.json(orders_);
  console.log('THE PROVIDER IDE'+my_buss.id);

} catch (err) {
  console.error(err.message)

 
}
});











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

