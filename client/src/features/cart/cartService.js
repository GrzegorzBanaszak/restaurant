import axios from "axios";

const API_URL = "https://pizza-restaurant-backend.herokuapp.com/api/orders/";

const sendOrder = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  const res = await axios.post(API_URL, data.order, config);
  return res.data;
};

const cartService = { sendOrder };

export default cartService;
