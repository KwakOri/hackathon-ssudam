import { AxiosInstance } from "axios";

class AuthAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async checkIsExistingEmail({ email }: { email: string }) {
    const response = await this.client.get(`/auth/check-email?email=${email}`);
    return response.data;
  }

  async sendAuthenticationMail({ email }: { email: string }) {
    const response = await this.client.post(
      "/auth/email-authentication",
      email
    );
    return response.data;
  }

  async getUser() {
    const res = await this.client.get("/user");
    return res.data;
  }

  // async logIn(data: TAuthData) {
  //   const response = await this.client.post("/auth/log-in", data);
  //   return response.data;
  // }
}

export default AuthAPI;
