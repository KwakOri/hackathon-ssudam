import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const ChatNoticeInfoTitleVariants = cva("", {
  variants: {
    intent: {
      redFill: "text-accent-red-normal",
      greenFill: "text-primary-heavy",
      dark: "text-label-strong",
    },
  },
});

const ChatNoticeInfoContentVariants = cva("", {
  variants: {
    intent: {
      redFill: "text-label-normal",
      greenFill: "text-primary-strong",
      dark: "text-label-neutral",
    },
  },
});

const ChatNoticeInfoCloseIconVariants = cva("", {
  variants: {
    intent: {
      redFill: "fill-label-neutral",
      greenFill: "fill-label-neutral",
      dark: "fill-label-alternative",
    },
  },
});

interface ChatNoticeInfoProps
  extends VariantProps<typeof ChatNoticeInfoTitleVariants> {
  title: string;
  content: string;
}

const ChatNoticeInfo = ({ title, content, intent }: ChatNoticeInfoProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Paragraph
          fontSize={"body2"}
          fontWeight={"semibold"}
          className={cn(ChatNoticeInfoTitleVariants({ intent }))}
        >
          {title}
        </Paragraph>
        <button>
          <SVGIcon
            icon={"Close"}
            size={"sm"}
            className={ChatNoticeInfoCloseIconVariants({ intent })}
          />
        </button>
      </div>
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className={cn(ChatNoticeInfoContentVariants({ intent }))}
      >
        {content}
      </Paragraph>
    </div>
  );
};

export default ChatNoticeInfo;
