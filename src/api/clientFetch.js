import axios from "axios";

export const clientFetch = axios.create({
  baseURL: "https://66300551c92f351c03d8d9dc.mockapi.io/api/v1/",
});
