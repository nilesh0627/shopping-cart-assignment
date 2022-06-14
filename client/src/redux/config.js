import axios from "axios";
const BASE_URL = "http://localhost:5000";
const PROD_URL= "https://my-json-server.typicode.com/nilesh0627";
export const Axios = axios.create({
  baseURL: PROD_URL,
});
