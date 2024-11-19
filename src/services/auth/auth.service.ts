import { AxiosInstance } from "axios";

interface SignUpTypes {
  email: string;
  password: string;
  name: string;
  address: string;
  ageGroup: string;
}

class AuthAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async checkIsExistingEmail({ email }: { email: string }) {
    const response = await this.client.post(`/auth/auth-code`, {
      email,
    });
    return response.data;
  }

  async sendAuthenticationMail({ email }: { email: string }) {
    const response = await this.client.post(
      "/auth/email-authentication",
      email
    );
    return response.data;
  }

  async verifyEmail({
    email,
    verifyCode,
  }: {
    email: string;
    verifyCode: string;
  }) {
    const response = await this.client.get(
      `/auth/verify-email?email=${email}&verifyCode=${verifyCode}`
    );
    return response.data;
  }

  async verifyNickname({ nickname }: { nickname: string }) {
    const response = await this.client.get(
      `/auth/verify-nickname?nickname=${nickname}`
    );
    return response.data;
  }

  async signUp({ email, password, name, address, ageGroup }: SignUpTypes) {
    const response = await this.client.post(`/auth/sign-up`, {
      email,
      password,
      name,
      address,
      ageGroup,
    });
    return response.data;
  }

  async signIn({ email, password }: { email: string; password: string }) {
    const response = await this.client.post(`/auth/sign-in`, {
      email,
      password,
    });
    return response.data;
  }

  async getUser() {
    const res = await this.client.get("/user");
    return res.data;
  }
}

export default AuthAPI;
