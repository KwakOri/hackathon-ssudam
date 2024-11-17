export type MessageType = "normal" | "otherMessageTypesIfAny";

export interface ChatMessage {
  id: number;
  userId: number;
  message: string;
  sender: "user" | "assistant";
  messageType: MessageType;
  createdAt: string; // ISO date string
}

export interface ChatResponse {
  data: ChatMessage[];
}
