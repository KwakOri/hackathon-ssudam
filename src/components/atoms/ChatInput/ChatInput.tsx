import { InputHTMLAttributes } from "react";

interface ChatInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const ChatInput = ({ ...props }: ChatInputProps) => {
  return (
    <input
      {...props}
      className={
        "w-full h-[22px] text-body2 font-medium placeholder-label-alternative text-label-strong resize-none overflow-hidden outline-none caret-green"
      }
    />
  );
};

export default ChatInput;
