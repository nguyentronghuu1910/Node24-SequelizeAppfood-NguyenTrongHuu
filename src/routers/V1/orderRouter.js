const express = require("express");
const orderController = require("../../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/postOrder", orderController.createOrder);

module.exports = orderRouter;
