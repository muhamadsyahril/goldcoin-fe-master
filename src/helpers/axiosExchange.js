import axios from "axios";
import { axiosExchange } from  "../urlConfig";

const accessToken = window.localStorage.getItem("accessToken");
const axiosIntance = axios.create({
  baseURL: axiosExchange,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosIntance;
