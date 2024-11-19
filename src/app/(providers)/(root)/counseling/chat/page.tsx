"use client";

import { UserChatRecord } from "@/app/(providers)/(root)/counseling/chat/chatTemplate";
import Page from "@/components/Layouts/Page";
import ChatBox from "@/components/molecules/ChatBox";
import ChatDate from "@/components/molecules/ChatDate";
import Header from "@/components/molecules/Header";
import ChatInputBox from "@/components/organisms/ChatInputBox";
import api from "@/services/service";
import { ChatMessage } from "@/types/chat/chat.types";
import { isSame } from "@/utils/format";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { PulseLoader } from "react-spinners";

const ChatPage = () => {
  const lastChatRef = useRef<HTMLDivElement>(null);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [init, setInit] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["getPrevChats"],
    queryFn: () => api.counseling.getPrevChats(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (chat: string) => api.counseling.postChat(chat, true),
    onSuccess: (data: ChatMessage) => {
      const newChat = new UserChatRecord();
      setChats((prev) => [
        ...prev,
        newChat.fromChatGPTMessage(data.message, data.messageType),
      ]);
    },
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.currentTarget.value);
  };
  const onChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newChat = new UserChatRecord();

    setChats((prev) => [...prev, newChat.toChatMessage(chatInput)]);
    mutate(chatInput);
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
                  <ChatDate>{date}</ChatDate>
                </div>
              )}
              <ChatBox
                key={chat.id}
                lastChatRef={isLastIndex ? lastChatRef : null}
                isMine={chat.role === "user"}
                isTimeVisible={isTimeVisible}
                time={time}
              >
                {chat.message}
              </ChatBox>
            </>
          );
        })}
        {isPending && (
          <ChatBox
            isMine={false}
            isTimeVisible={false}
            time=""
            lastChatRef={lastChatRef}
          >
            <PulseLoader speedMultiplier={0.5} size={8} color={"#B5B6BB"} />
          </ChatBox>
        )}
      </div>
      <div className="absolute w-full bottom-4 px-4 z-20">
        <ChatInputBox
          onChange={onInputChange}
          onSubmit={onChatSubmit}
          value={chatInput}
        />
      </div>
      <div
        className={
          "absolute bottom-0 z-10 w-full h-12 bg-gradient-to-t from-label-strong/50 to-label-strong/0"
        }
      ></div>
    </Page>
  );
};

export default ChatPage;
