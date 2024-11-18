import Paragraph from "@/components/atoms/Paragraph";
import { PropsWithChildren } from "react";

const ChatDate = ({ children }: PropsWithChildren) => {
  return (
    <div className={"bg-line-solid rounded-full px-3 py-[6px]"}>
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className={"text-line-heavy"}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default ChatDate;
