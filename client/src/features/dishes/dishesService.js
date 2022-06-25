import axios from "axios";

const API_URL = "https://pizza-restaurant-backend.herokuapp.com/api/dishes";

const getDishes = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

const dishesServices = {
  getDishes,
};

export default dishesServices;
