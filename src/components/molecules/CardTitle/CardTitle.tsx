import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const CardTitleVariants = cva("", {
  variants: {
    isChecked: {
      true: "fill-primary-heavy",
      false: "fill-transparent stroke-label-neutral",
    },
  },
});

interface CardTitleProps extends VariantProps<typeof CardTitleVariants> {
  title: string;
  isChecked: boolean;
}

const CardTitle = ({ title, isChecked }: CardTitleProps) => {
  return (
    <div className="flex w-[240px] flex-col gap-1">
      <div className="flex justify-between items-center">
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={"text-label-neutral"}
        >
          From
        </Paragraph>
        <button>
          <SVGIcon
            icon={"StarActiveFalse"}
            size={"md"}
            className={cn(CardTitleVariants({ isChecked }))}
          />
        </button>
      </div>
      <Paragraph
        fontSize={"body2"}
        fontWeight={"semibold"}
        className={
          "text-label-strong overflow-hidden whitespace-nowrap text-ellipsis"
        }
      >
        {title}
      </Paragraph>
    </div>
  );
};

export default CardTitle;
