import axios from "axios";
import { coreIamApi } from  "../urlConfig";

const accessToken = window.localStorage.getItem("accessToken");
const axiosIntance = axios.create({
  baseURL: coreIamApi,
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosIntance;
