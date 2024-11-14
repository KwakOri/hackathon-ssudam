import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const ChatPlayButtonVariants = cva(
  "flex justify-center items-center rounded-full w-8 h-8",
  {
    variants: {
      color: {
        primary: "bg-primary-normal",
        tertiary: "bg-tertiary-normal",
      },
    },
  }
);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ChatPlayButtonProps
  extends VariantProps<typeof ChatPlayButtonVariants> {}

const ChatPlayButton = ({ color }: ChatPlayButtonProps) => {
  return (
    <div className={cn(ChatPlayButtonVariants({ color }))}>
      <SVGIcon icon="Play" size={"md"} className={"fill-static-white"} />
    </div>
  );
};

export default ChatPlayButton;
