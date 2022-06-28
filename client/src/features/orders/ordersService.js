import axios from "axios";

const API_URL = "https://pizza-restaurant-backend.herokuapp.com/api/orders/";

export const getOrders = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data}`,
    },
  };

  const res = await axios.get(API_URL, config);
  return res.data;
};

const orderService = { getOrders };

export default orderService;
