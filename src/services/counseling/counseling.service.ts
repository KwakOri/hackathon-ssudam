import { AxiosInstance } from "axios";

class CounselingAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getPrevChats() {
    const res = await this.client.get("/chat/prev-chats");
    console.log("hello");
    return res.data;
  }
}

export default CounselingAPI;
