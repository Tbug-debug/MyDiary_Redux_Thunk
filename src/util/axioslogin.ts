import axios from "axios";

export const logining = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
