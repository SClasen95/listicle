import axios from "axios";
import Config from "react-native-config";

export const request = ({ url, method, data }) => {
  const API_BASE_URL = "https://listicle.deegeehub.com/api";
  return axios({
    method: method || "get",
    url: `${API_BASE_URL}${url}`,
    data: data,
  });
};


export const addTokenToAxios = (token) => {
    console.log("token: ", token)
    axios.defaults.headers.Authorization = token
}