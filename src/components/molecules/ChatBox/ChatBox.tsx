import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import { PropsWithChildren } from "react";

const ChatBox = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-4 py-[9px]">
      <Paragraph
        fontSize={"body2"}
        fontWeight={"medium"}
        className={"text-label-normal"}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default ChatBox;
