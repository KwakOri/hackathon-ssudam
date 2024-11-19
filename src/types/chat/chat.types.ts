export type MessageType =
  | "normal"
  | "relatedToSuicide"
  | "askingGovernmentHelp";

export interface ChatMessage {
  id: number;
  userId: number;
  message: string;
  role: "user" | "assistant";
  messageType: MessageType;
  createdAt: string;
}

export interface ChatResponse {
  data: { data: ChatMessage[] };
}

export interface ChatGPTResponse {
  data: ChatMessage;
}
