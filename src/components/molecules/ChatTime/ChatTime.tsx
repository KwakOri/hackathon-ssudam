import Paragraph from "@/components/atoms/Paragraph";
import { PropsWithChildren } from "react";

const ChatTime = ({ children }: PropsWithChildren) => {
  return (
    <Paragraph
      fontSize={"caption1"}
      fontWeight={"medium"}
      className={"text-line-heavy relative z-10 py-[6px]"}
    >
      {children}
    </Paragraph>
  );
};

export default ChatTime;
