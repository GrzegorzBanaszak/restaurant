import axios from "axios";

const API_URL = "http://192.168.0.107:5000/api/dishes";

const getDishes = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

const dishesServices = {
  getDishes,
};

export default dishesServices;
