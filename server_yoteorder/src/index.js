const express = require("express");
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import { success, error } from 'consola';
const cors = require('cors');

import { PORT } from './config';
const http = require("http");

// Import Routes
import imagesRoutes from './routes/images';

const db = require("./models");

const { Server } = require("socket.io");


const server = http.createServer(app);


app.use(cors());

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {

  socket.on('storeClientInfo', (data) => {
    console.log("connected custom id:", data.customId);
    socket.customId = data.customId;
});

  //console.log(`User Connected: ${socket.customId}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.customId} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.customId);
  });
});


// const cors = require('cors');
// const corsOptions ={
//     origin:'http://kilimomazao.com', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));




 //app.use(express.json());
 // app.use(bodyParser.json());




//  const corsOptions ={
//       origin: '*', 
 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
//    }
//    app.use(cors(corsOptions));



 app.use(express.json());
 //app.use(bodyParser.json());

// app.use(cors());






// app.use(cors({
//   origin: '*'
// }));



const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);


// const staffRouter = require('./routes/Staffs');
// app.use("/staff", staffRouter);


const customerRouter = require('./routes/Customers');
app.use("/customer", customerRouter);


const productRouter = require('./routes/Products');
app.use("/product", productRouter);


const propertiesRouter = require("./routes/Properties");
app.use("/property", propertiesRouter);

const propertyAddressRouter = require("./routes/PropertyAddress");
app.use("/property-address", propertyAddressRouter);



const propertyFeeRouter = require("./routes/PropertyFees");
app.use("/property-fee", propertyFeeRouter);




//const propertyImages = require("./routes/images");
//app.use("/images", propertyImages);


// Injecting routes in main app
app.use('/api/images', imagesRoutes);



// const amenities = require("./routes/Amenities");
// app.use("/amenities", amenities);

const propdesc = require("./routes/PropertyDescription");
app.use("/propdescription", propdesc);

const propertyprices = require("./routes/PropertyPrice");
app.use("/propertyprices", propertyprices);

const booking = require("./routes/Bookings");
app.use("/booking", booking);



const payments = require("./routes/Payments");
app.use("/payment", payments);



const message = require("./routes/Messages");
app.use("/message", message);


const review = require("./routes/Reviews");
app.use("/review", review);





const payouts = require("./routes/Payouts");
app.use("/payout", payouts);


const requests = require("./routes/ProductRequests");
app.use("/request", requests);


const subscriptionrequest = require("./routes/SubscriptionRequests");
app.use("/subscriptionrequest", subscriptionrequest);

const orders = require("./routes/Orders");
app.use("/order", orders);



 const orderbids = require("./routes/OrderBids");
 app.use("/orderbids", orderbids);


 const running_orders= require("./routes/RunningOrders");
 app.use("/running_orders", running_orders);


 const order_payments= require("./routes/OrderPayments");
 app.use("/order_payments", order_payments);


// Setting up the express static directory
app.use(express.static(path.join(__dirname, './public')));


db.sequelize.sync().then(() => {
  server.listen(PORT, () => success({ badge: true, message: `Server started on port ${PORT}` }));
  })
  .catch((err)=>{
console.log(err)
  });
  
  process.on('unhandledRejection', up => { throw up })