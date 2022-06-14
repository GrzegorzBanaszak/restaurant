import axios from "axios";

const API_URL = "http://192.168.0.107:5000/api/auth/";

const getUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL + "me", config);
  return res.data;
};

const authServices = { getUser };

export default authServices;
