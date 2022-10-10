const express = require("express");
const app = express();
const path =require('path');
const {bodyParser}=require('body-parser');
const { success, error } =require("consola");

const cors = require('cors');

//const PORT =require('./src/config');
const http = require("http");

// Import Routes
//const imagesRoutes=require('./src/routes/indexRoute')




const db = require("./src/models");

const { Server } = require("socket.io");





const server = http.createServer(app);


app.use(cors());

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST","PUT"],
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






 app.use(express.json());
 //app.use(bodyParser.json());

// app.use(cors());






// app.use(cors({
//   origin: '*'
// }));



// const usersRouter=require("./src/routes/Users");

// app.use("/users", usersRouter);


require("./src/routes/Users")(app);

require("./src/routes/Business")(app);

require("./src/routes/Products")(app);


require("./src/routes/images")(app);

require("./src/routes/Customers")(app);

require("./src/routes/Orders")(app);

require("./src/routes/Services")(app);

require("./src/routes/Staffs")(app);

require("./src/routes/Bookings")(app);


require("./src/routes/ServiceTypes")(app);









// const staffRouter = require('./routes/Staffs');
// app.use("/staff", staffRouter);






//"start": "  node -r esm .",

//"start": "nodemon  -r esm .",


// Setting up the express static directory
app.use(express.static(path.join(__dirname, './public')));

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
  server.listen(PORT, () => success({ badge: true, message: `Server started on port ${PORT}` }));
  })
  .catch((err)=>{
console.log(err)
  });
  
  process.on('unhandledRejection', up => { throw up })