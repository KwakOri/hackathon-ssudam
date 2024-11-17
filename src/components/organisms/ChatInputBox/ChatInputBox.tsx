import ChatInput from "@/components/atoms/ChatInput";
import SVGIcon from "@/components/atoms/SVGIcon";
import ChatSendButton from "@/components/molecules/ChatSendButton";

interface ChatInputBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInputBox = ({ value, onChange, onSubmit }: ChatInputBoxProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="pl-4 pr-2 pt-2 pb-2 flex justify-between items-center rounded-full bg-background-normal border-line-normal border neon-weak"
    >
      <ChatInput
        value={value}
        onChange={onChange}
        placeholder="메세지를 입력해주세요"
      />
      <div className="flex gap-3 items-center">
        <button type={"button"}>
          <SVGIcon icon={"Mic"} size={"md"} />
        </button>
        <ChatSendButton type={"submit"} />
      </div>
    </form>
  );
};

export default ChatInputBox;
