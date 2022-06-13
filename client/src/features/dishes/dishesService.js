import axios from "axios";

const API_URL = "http://localhost:5000/dishes";

const getDishes = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

const dishesServices = {
  getDishes,
};

export default dishesServices;
