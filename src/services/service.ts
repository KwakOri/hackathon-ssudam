import AuthAPI from "@/services/auth/auth.service";
import axios, { AxiosInstance } from "axios";

export const BASE_URL = "https://b6f2-220-88-76-114.ngrok-free.app";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "ngrok-skip-browser-warning": true,
  },
});

class API {
  private client: AxiosInstance;
  public auth;

  constructor() {
    this.client = client;
    this.auth = new AuthAPI(this.client);
  }
}

const api = new API();

export default api;
