import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "./request";

export const login = async (values) => {
  try {
    const response = await request({
      url: "/user/login",
      data: values,
      method: "post",
    });
    if (response?.data?.token) {
      await AsyncStorage.setItem("auth_token", response?.data?.token);
      return response?.data?.token;
    }
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const signup = async (values) => {
  try {
    const response = await request({
      url: "/user/register",
      data: values,
      method: "post",
    });
    if (response) {
      const { email, password } = values;
      const loginResponse = await login({ email, password });
      console.log("Login response: ", loginResponse);
      return loginResponse;
    }
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const getProfile = async () => {
  try {
    const response = await request({
      url: "/user/profile",
      method: "get",
    });
    if (response) {
      return(response?.data);
    }
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const updateProfile = async (data) => {
    try {
      const response = await request({
        url: "/user/profile",
        method: "patch",
        data
      });
      if (response) {
        const profile = await getProfile()
        return profile;
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };


  export const getServices = async () => {
    try {
      const response = await request({
        url: "/services/",
        method: "get",
      });
      if (response) {
        return(response?.data);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };
