import { AxiosInstance } from "axios";

class AuthAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  // async signUp(data: TAuthData) {
  //   const response = await this.client.post("/auth/sign-up", data);
  //   return response.data;
  // }

  // async logIn(data: TAuthData) {
  //   const response = await this.client.post("/auth/log-in", data);
  //   return response.data;
  // }
}

export default AuthAPI;
