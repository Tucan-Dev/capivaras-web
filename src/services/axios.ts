const axios = require("axios").default;
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { capivaras_token: token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://capivaras-api.herokuapp.com/v1",
    // baseURL: "https://capivaras-api.herokuapp.com/v1",
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
