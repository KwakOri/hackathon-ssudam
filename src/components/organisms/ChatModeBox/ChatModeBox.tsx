import Paragraph from "@/components/atoms/Paragraph";
import ChatPlayButton from "@/components/molecules/ChatPlayButton";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const ChatModeBoxVariants = cva(
  "w-full p-4 flex flex-col gap-3 border rounded-[18px]",
  {
    variants: {
      intent: {
        primary: "bg-primary-light border-primary-normal",
        tertiary: "bg-tertiary-light border-tertiary-normal",
      },
    },
  }
);
const ChatModeBoxModeVariants = cva("", {
  variants: {
    intent: {
      primary: "text-primary-strong",
      tertiary: "text-tertiary-strong",
    },
  },
});
const ChatModeBoxTitleVariants = cva("", {
  variants: {
    intent: {
      primary: "text-primary-heavy",
      tertiary: "text-tertiary-heavy",
    },
  },
});

interface ChatModeBoxProps extends VariantProps<typeof ChatModeBoxVariants> {
  mode: string;
  title: string;
  description: string;
}

const ChatModeBox = ({
  mode,
  title,
  description,
  intent,
}: ChatModeBoxProps) => {
  return (
    <article className={cn(ChatModeBoxVariants({ intent }))}>
      <div className={"flex flex-col gap-1"}>
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"semibold"}
          className={cn(ChatModeBoxModeVariants({ intent }))}
        >
          {mode}
        </Paragraph>
        <Paragraph
          fontSize={"heading2"}
          fontWeight={"semibold"}
          className={cn(ChatModeBoxTitleVariants({ intent }))}
        >
          {title}
        </Paragraph>
      </div>
      <Paragraph
        fontSize={"body2"}
        fontWeight={"medium"}
        className={"text-label-normal "}
      >
        {description}
      </Paragraph>
      <div className={"w-full flex justify-end"}>
        <ChatPlayButton color={intent} />
      </div>
    </article>
  );
};

export default ChatModeBox;
