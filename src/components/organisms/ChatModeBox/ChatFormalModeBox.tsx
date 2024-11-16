import ChatModeBox from "@/components/organisms/ChatModeBox/ChatModeBox";

const ChatFormalModeBox = () => {
  return (
    <ChatModeBox
      description="고민이 있으신가요? 현실적인 해결방안이 필요할 때 추천해요."
      mode="높임말 모드"
      title="함께 의논해요"
      intent={"primary"}
    />
  );
};
export default ChatFormalModeBox;
