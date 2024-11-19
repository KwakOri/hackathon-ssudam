"use client";

import { UserChatRecord } from "@/app/(providers)/(root)/counseling/chat/chatTemplate";
import Loading from "@/components/atoms/Loading/Loading";
import Page from "@/components/Layouts/Page";
import ChatBox from "@/components/molecules/ChatBox";
import ChatDate from "@/components/molecules/ChatDate";
import Header from "@/components/molecules/Header";
import CardInfoBox from "@/components/organisms/CardInfoBox";
import ChatInputBox from "@/components/organisms/ChatInputBox";
import ChatNoticeBox from "@/components/organisms/ChatNoticeBox/ChatNoticeBox";
import ChatPlaceBox from "@/components/organisms/ChatPlaceBox";
import api from "@/services/service";
import { ChatGPTResponse, ChatMessage } from "@/types/chat/chat.types";
import { isSame } from "@/utils/format";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { PulseLoader } from "react-spinners";

const ChatPage = () => {
  const navigate = useRouter();
  const [isPrevChats, setIsPrevChats] = useState<boolean>(true);
  const lastChatRef = useRef<HTMLDivElement>(null);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [isInit, setIsInit] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>("");

  const { mutate, isPending } = useMutation({
    mutationFn: (chat: string) => {
      if (isPrevChats) {
        return api.counseling.postChat(chat);
      } else {
        setIsPrevChats(true);
        return api.counseling.postFirstChat(chat, true, "쓰담이");
      }
    },
    onSuccess: (data: ChatGPTResponse) => {
      const newChat = new UserChatRecord();
      setChats((prev) => [
        ...prev,
        newChat.fromChatGPTMessage(
          data.chatResponse,
          data.messageType,
          data.birthSupportData
        ),
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
    if (isInit) return;
    const getPrevChats = async () => {
      const res = await api.counseling.getPrevChats();
      setIsPrevChats(res.isChatList);
      setChats((prev) => [...prev, ...res.chatList]);
      setIsInit(true);
    };
    getPrevChats();
  }, []);

  useEffect(() => {
    if (lastChatRef.current) {
      lastChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  if (!isInit) return <Loading />;

  return (
    <Page className={"bg-fill-light"}>
      <Header intent={"labelWithBackIcon"} title="AI"></Header>
      <div className="grow flex flex-col overflow-y-scroll px-4 pb-20">
        {chats.map((chat: ChatMessage, i) => {
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
              {chat.role === "assistant" &&
                chat.messageType === "relatedToSuicide" && (
                  <div className="flex flex-col gap-4 mb-2">
                    <ChatNoticeBox
                      title="혹시 위험한 상황에 처해 있으신가요?"
                      contents={[
                        "쓰담이님은 혼자가 아니에요.",
                        "아래 버튼만 누르면, 24시 긴급전화와 연결돼요.",
                      ]}
                      intent={"redFill"}
                      buttonLabel="전화 걸기"
                    />
                    <div className={"flex gap-2 flex-nowrap"}>
                      <ChatPlaceBox
                        category="지원센터"
                        href="#
                    "
                        location="807m"
                        title="서울시 정신건강..."
                      />
                      <ChatPlaceBox
                        category="의료기관"
                        href="#
                    "
                        location="1.2km"
                        title="한마음병원"
                      />
                      <ChatPlaceBox
                        category="의료기관"
                        href="#
                    "
                        location="1.2km"
                        title="한마음병원"
                      />
                    </div>
                  </div>
                )}
              {chat.role === "assistant" &&
                chat.messageType === "askingGovernmentHelp" && (
                  <div className="flex flex-col gap-2 mb-2">
                    <ChatNoticeBox
                      className=""
                      title="혹시 이런 정보들은 어떤가요?"
                      contents={[
                        "쓰담님에게 딱 맞는",
                        "더욱 많은 정보들을 찾아볼 수 있어요.",
                      ]}
                      intent={"greenFill"}
                      buttonLabel="더 찾아보기"
                    />
                    {chat.birthSupportData?.map((item) => (
                      <div
                        onClick={() => navigate.push(`information/${item.id}`)}
                      >
                        <CardInfoBox
                          className="neon-light w-full"
                          badges={[]}
                          title={item.title}
                          isChecked={false}
                          isOption={false}
                        />
                      </div>
                    ))}
                  </div>
                )}
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
