"use client";

import { UserChatRecord } from "@/app/(providers)/(root)/counseling/chat/chatTemplate";
import Paragraph from "@/components/atoms/Paragraph";
import Page from "@/components/Layouts/Page";
import ChatBox from "@/components/molecules/ChatBox";
import Header from "@/components/molecules/Header";
import ChatInputBox from "@/components/organisms/ChatInputBox";
import api from "@/services/service";
import { ChatMessage } from "@/types/chat/chat.types";
import { isSame } from "@/utils/format";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

const ChatPage = () => {
  const lastChatRef = useRef<HTMLDivElement>(null);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [init, setInit] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>("");
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.currentTarget.value);
  };
  const onChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newChat = new UserChatRecord();
    console.log(newChat.toChatMessage(chatInput));
    setChats((prev) => [...prev, newChat.toChatMessage(chatInput)]);
    setChatInput("");
  };

  useEffect(() => {
    if (init) return;
    const getPrevChats = async () => {
      const res = await api.counseling.getPrevChats();
      console.log(res);
      setChats((prev) => [...prev, ...res]);
      setInit(true);
    };
    getPrevChats();
  }, []);

  useEffect(() => {
    if (lastChatRef.current) {
      lastChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  return (
    <Page className={"bg-fill-light"}>
      <Header intent={"labelWithBackIcon"} title="AI"></Header>
      <div className="grow flex flex-col overflow-y-scroll px-4 pb-20">
        {chats.map((chat, i) => {
          const { date, time, isDateVisible, isTimeVisible } = isSame({
            prev: chats[i - 1]?.createdAt,
            cur: chats[i].createdAt,
          });
          const isLastIndex = chats.length - 1 === i;

          return (
            <>
              {isDateVisible && (
                <div className={"w-full flex justify-center py-4"}>
                  <div className="px-5 py-2 rounded-full inner-border-dark bg-background-normal">
                    <Paragraph fontSize={"body2"} fontWeight={"medium"}>
                      {date}
                    </Paragraph>
                  </div>
                </div>
              )}
              <ChatBox
                key={chat.id}
                lastChatRef={isLastIndex ? lastChatRef : null}
                isMine={chat.sender === "user"}
                isTimeVisible={isTimeVisible}
                time={time}
              >
                {chat.message}
              </ChatBox>
            </>
          );
        })}
      </div>
      <div className="absolute w-full bottom-4 px-4">
        <ChatInputBox
          onChange={onInputChange}
          onSubmit={onChatSubmit}
          value={chatInput}
        />
      </div>
    </Page>
  );
};

export default ChatPage;
