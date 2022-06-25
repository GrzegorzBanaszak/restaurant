import axios from "axios";

const API_URL = "https://pizza-restaurant-backend.herokuapp.com/api/auth/";

const getUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL + "me", config);
  return res.data;
};

const login = async (data) => {
  const res = await axios.post(API_URL + "login", data);
  return res.data;
};

const register = async (data) => {
  const res = await axios.post(API_URL, data);

  return res.data;
};
const authServices = { getUser, login, register };

export default authServices;
