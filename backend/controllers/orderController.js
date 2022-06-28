const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ "user.id": req.user._id });

  res.status(200).json(orders);
});

const createOrder = asyncHandler(async (req, res) => {
  const { orderItems, orderTotal, payType } = req.body;

  if (!orderItems || !orderTotal || !payType) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const order = await Order.create({
    user: {
      id: req.user._id,
      email: req.user.email,
    },
    orderItems: orderItems,
    orderTotal: orderTotal,
    payType: payType,
  });

  if (!order) {
    res.status(400);
    throw new Error("Order could not be created");
  }

  res.status(201).json({ message: "Order created successfully" });
});

module.exports = { getAllOrders, createOrder };
