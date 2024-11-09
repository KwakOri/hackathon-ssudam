import SVGIcon from "@/components/atoms/SVGIcon";
import { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ChatSendButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const ChatSendButton = ({ ...props }: ChatSendButtonProps) => {
  return (
    <button
      className="flex justify-center items-center w-8 h-8 rounded-full bg-primary-heavy"
      {...props}
    >
      <SVGIcon icon={"ArrowUp"} className={"fill-static-white"} size={"md"} />
    </button>
  );
};

export default ChatSendButton;
