import { ChatGPTResponse, ChatResponse } from "@/types/chat/chat.types";
import { AxiosInstance } from "axios";

class CounselingAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getPrevChats() {
    const res: ChatResponse = await this.client.get("/chat/prev-chats");
    return res.data;
  }

  async postChat(chat: string) {
    const res: ChatGPTResponse = await this.client.post("/chat", {
      message: chat,
    });
    return res.data;
  }
}

export default CounselingAPI;
