import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const ChatBoxWrapperVariants = cva("px-4 py-[9px] neon-light", {
  variants: {
    isMine: {
      true: "bg-primary-heavy",
      false: "bg-background-normal",
    },
    type: {
      chat: "",
      notice: "rounded-[18px]",
    },
  },
  compoundVariants: [
    {
      isMine: true,
      type: "chat",
      className: "rounded-t-[18px] rounded-br-[18px]",
    },
    {
      isMine: false,
      type: "chat",
      className: "rounded-t-[18px] rounded-bl-[18px]",
    },
  ],
  defaultVariants: {
    isMine: false,
    type: "chat",
  },
});

const ChatBoxVariants = cva("", {
  variants: {
    isMine: {
      true: "text-static-white",
      false: "text-label-normal",
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ChatBoxProps extends VariantProps<typeof ChatBoxWrapperVariants> {}

const ChatBox = ({
  children,
  isMine,
  type,
}: PropsWithChildren<ChatBoxProps>) => {
  return (
    <div className={cn(ChatBoxWrapperVariants({ isMine, type }))}>
      <Paragraph
        fontSize={"body2"}
        fontWeight={"medium"}
        className={cn(ChatBoxVariants({ isMine }))}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default ChatBox;
