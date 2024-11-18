import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, PropsWithChildren } from "react";

const ChatBoxWrapperVariants = cva("py-2 w-full flex flex-col", {
  variants: {
    isMine: {
      true: "items-end",
      false: "items-start",
    },
  },
  defaultVariants: {
    isMine: false,
  },
});

const ChatBoxVariants = cva("px-4 py-[9px] neon-light", {
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
      className: "rounded-t-[18px] rounded-bl-[18px]",
    },
    {
      isMine: false,
      type: "chat",
      className: "rounded-t-[18px] rounded-br-[18px]",
    },
  ],
  defaultVariants: {
    isMine: false,
    type: "chat",
  },
});

const ChatBoxTextVariants = cva("", {
  variants: {
    isMine: {
      true: "text-static-white",
      false: "text-label-normal",
    },
  },
  defaultVariants: {
    isMine: false,
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ChatBoxProps extends VariantProps<typeof ChatBoxVariants> {
  time: string;
  isTimeVisible: boolean;
  lastChatRef: React.RefObject<HTMLDivElement> | null;
}

const ChatBox = forwardRef<HTMLElement, PropsWithChildren<ChatBoxProps>>(
  ({ children, isMine, type, time, isTimeVisible, lastChatRef }, ref) => {
    return (
      <div className={cn(ChatBoxWrapperVariants({ isMine }))}>
        <div
          ref={lastChatRef}
          className={cn(ChatBoxVariants({ isMine, type }))}
        >
          <Paragraph
            fontSize={"body2"}
            fontWeight={"medium"}
            className={cn(ChatBoxTextVariants({ isMine }))}
          >
            {children}
          </Paragraph>
        </div>
        {isTimeVisible && (
          <Paragraph
            fontSize={"caption1"}
            fontWeight={"medium"}
            className={"text-label-neutral relative z-10 p-1"}
          >
            {time}
          </Paragraph>
        )}
      </div>
    );
  }
);

// Add display name for the component
ChatBox.displayName = "ChatBox";

export default ChatBox;
