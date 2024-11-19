import { PrevChatResponse } from "@/types/chat/chat.types";
import { AxiosInstance } from "axios";

class CounselingAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getPrevChats() {
    console.log(localStorage.getItem("ACCESS_TOKEN"));
    const res: PrevChatResponse = await this.client.get(
      "/chat/chat-user-list",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      }
    );
    console.log(res);

    return res.data.data;
  }

  async postFirstChat(chat: string, isRespectful: boolean, name: string) {
    const res: any = await this.client.post(
      "/chat",
      {
        message: chat,
        isRespectful: isRespectful,
        chatName: name,
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

  async postChat(chat: string) {
    const res: any = await this.client.post(
      "/chat",
      {
        message: chat,
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
