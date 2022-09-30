import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coindesk.com",
  headers: {
    accept: "application/json,",
    "content-type": "application/json;charset=UTF-8",
  },
});

export const apis = {
  getBitcoinPrice: () => api.get("/v1/bpi/currentprice.json"),
};
