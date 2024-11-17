import { ChatMessage, MessageType } from "@/types/chat/chat.types";

export class UserChatRecord {
  public id: number;
  public userId: number;
  public sender: "user" | "assistant";
  public messageType: MessageType;
  constructor() {
    this.id = 0;
    this.userId = 2;
    this.sender = "user";
    this.messageType = "normal";
  }
  toChatMessage(message: string): ChatMessage {
    return {
      id: Date.now(),
      userId: this.userId,
      message: message,
      sender: this.sender,
      messageType: this.messageType,
      createdAt: new Date().toISOString(),
    };
  }
}
