const Dish = require("../models/dishModel");
const asyncHandler = require("express-async-handler");

const getAllDishes = asyncHandler(async (req, res) => {
  const dishes = await Dish.find();

  res.status(200).json(dishes);
});

const addDish = asyncHandler(async (req, res) => {
  const { name, type, price, ingredients } = req.body;

  if (!name || !type || !price || !ingredients) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const dish = await Dish.create(req.body);

  if (!dish) {
    res.status(400);
    throw new Error("Dish could not be created");
  }

  res.status(200).json(dish);
});

module.exports = { getAllDishes, addDish };
