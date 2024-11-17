import AuthAPI from "@/services/auth/auth.service";
import CounselingAPI from "@/services/counseling/counseling.service";
import axios, { AxiosInstance } from "axios";

// export const BASE_URL = "https://b6f2-220-88-76-114.ngrok-free.app";

// const client = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Credentials": true,
//     "ngrok-skip-browser-warning": true,
//   },
// });

export const BASE_URL = "http://localhost:8080";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

class API {
  private client: AxiosInstance;
  public auth;
  public counseling;

  constructor() {
    this.client = client;
    this.auth = new AuthAPI(this.client);
    this.counseling = new CounselingAPI(this.client);
  }
}

const api = new API();

export default api;
