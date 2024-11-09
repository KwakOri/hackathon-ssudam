import Button from "@/components/atoms/Button";
import ChatNoticeInfo from "@/components/molecules/ChatNoticeInfo";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

export const ChatNoticeInfoWrapperVariants = cva(
  "gap-3 flex flex-col px-4 py-4 w-full rounded-[18px] border neon-light",
  {
    variants: {
      intent: {
        redFill: "bg-accent-red-light border-accent-red-light",
        greenFill: "bg-primary-light border-primary-light",
        dark: "bg-background-normal border-line-normal",
      },
    },
    defaultVariants: {
      intent: "dark",
    },
  }
);

interface ChatNoticeInfoProps
  extends VariantProps<typeof ChatNoticeInfoWrapperVariants> {
  title: string;
  content: string;
}

const ChatNoticeBox = ({ title, content, intent }: ChatNoticeInfoProps) => {
  return (
    <article className={cn(ChatNoticeInfoWrapperVariants({ intent }))}>
      <ChatNoticeInfo title={title} content={content} intent={intent} />
      <Button intent={intent} size={"md"} className="w-full">
        Label
      </Button>
    </article>
  );
};

export default ChatNoticeBox;
