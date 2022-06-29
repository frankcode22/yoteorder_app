const express = require("express");
const router = express.Router();
const { Bookings,Users,Orders,OrderBids} = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");





router.post("/", validateToken, async (req, res) => {
    const {CustomerId,OrderId,Amount } = req.body;
    const UserId = req.user.id;
  
    const found = await OrderBids.findOne({
      where: { OrderId: OrderId, UserId: UserId },
    });
    if (!found) {
      const order_bids=await OrderBids.create({CustomerId:CustomerId, OrderId: OrderId, UserId: UserId,Amount:Amount });
      res.json(order_bids);
      console.log(order_bids)
    } else {
      await OrderBids.destroy({
        where: { OrderId: OrderId, UserId: UserId },
      });
      res.json('Not Saved');
    }
  });


  router.get("/sellerbids", validateToken, async (req, res) => {
    const seller_bids = await OrderBids.findAll({
      where: { CustomerId: req.user.id},include:[Users]
    });
    res.json(seller_bids);
    console.log(seller_bids)
  });


  module.exports=router;