export type MessageType =
  | "normal"
  | "relatedToSuicide"
  | "askingGovernmentHelp";

export type birthSupportDataTypes = { id: number; title: string }[];
export interface ChatMessage {
  id: number;
  userId: number;
  message: string;
  role: "user" | "assistant";
  messageType: MessageType;
  createdAt: string;
  birthSupportData?: birthSupportDataTypes;
}

export interface PrevChatResponse {
  data: {
    data: {
      chatList: ChatMessage[];
      isChatList: boolean;
    };
  };
}

export interface ChatGPTResponse {
  birthSupportData: birthSupportDataTypes;
  chatResponse: string;
  messageType: MessageType;
}
