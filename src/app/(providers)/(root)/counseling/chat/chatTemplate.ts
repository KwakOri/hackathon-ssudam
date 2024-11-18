import { ChatMessage, MessageType } from "@/types/chat/chat.types";

export class UserChatRecord {
  public id: number;
  public userId: number;
  public role: "user" | "assistant";
  constructor() {
    this.id = 0;
    this.userId = 2;
    this.role = "user";
  }

  toChatMessage(
    message: string,
    messageType: MessageType = "normal"
  ): ChatMessage {
    return {
      id: Date.now(),
      userId: this.userId,
      message: message,
      role: this.role,
      messageType: messageType,
      createdAt: new Date().toISOString(),
    };
  }

  fromChatGPTMessage(message: string, messageType: MessageType): ChatMessage {
    return {
      id: Date.now(),
      userId: this.userId,
      message: message,
      role: "assistant",
      messageType: messageType,
      createdAt: new Date().toISOString(),
    };
  }
}
