import { ChatResponse } from "@/types/chat/chat.types";
import { AxiosInstance } from "axios";

class CounselingAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getPrevChats() {
    console.log(localStorage.getItem("ACCESS_TOKEN"));
    const res: ChatResponse = await this.client.get("/chat/chat-user-list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    });

    return res.data.data;
  }

  async postChat(chat: string, isRespectful: boolean) {
    const res: any = await this.client.post(
      "/chat",
      {
        message: chat,
        isRespectful: isRespectful,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      }
    );
    console.log(res);
    return res.data.data;
  }
}

export default CounselingAPI;
