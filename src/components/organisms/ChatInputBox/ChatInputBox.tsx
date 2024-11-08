import ChatInput from "@/components/atoms/ChatInput";
import SVGIcon from "@/components/atoms/SVGIcon";
import ChatSendButton from "@/components/molecules/ChatSendButton";

const ChatInputBox = () => {
  return (
    <div className="pl-4 pr-2 pt-2 pb-2 flex justify-between items-center rounded-full bg-background-normal border-line-normal border neon-weak">
      <ChatInput />
      <div className="flex gap-3 items-center">
        <button>
          <SVGIcon icon={"Mic"} size={"md"} />
        </button>
        <ChatSendButton />
      </div>
    </div>
  );
};

export default ChatInputBox;
