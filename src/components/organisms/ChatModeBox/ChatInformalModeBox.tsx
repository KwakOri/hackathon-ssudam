import ChatModeBox from "@/components/organisms/ChatModeBox/ChatModeBox";

const ChatInformalModeBox = () => {
  return (
    <ChatModeBox
      description="반말로 더욱 친근하게! 친한 친구처럼 털어놓고 싶은 날 추천해요."
      mode="반말 모드"
      title="들어줄게요"
      intent={"tertiary"}
    />
  );
};

export default ChatInformalModeBox;
