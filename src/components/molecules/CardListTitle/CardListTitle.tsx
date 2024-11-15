import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const CardListTitleVariants = cva("", {
  variants: {
    isChecked: {
      true: "fill-primary-heavy stroke-primary-heavy",
      false: "fill-transparent stroke-label-neutral",
    },
  },
});

interface CardListTitleProps
  extends VariantProps<typeof CardListTitleVariants> {
  title: string;
  year: string;
  month: string;
  day: string;
  isChecked: boolean;
}

const CardListTitle = ({
  title,
  year,
  month,
  day,
  isChecked,
}: CardListTitleProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={"text-label-neutral"}
        >
          From
        </Paragraph>
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={"text-label-neutral"}
        >
          {year}/{month}/{day}
        </Paragraph>
      </div>
      <div className="flex justify-between items-center">
        <Paragraph
          fontSize={"body2"}
          fontWeight={"semibold"}
          className={
            "text-label-strong overflow-hidden whitespace-nowrap text-ellipsis"
          }
        >
          {title}
        </Paragraph>
        <button>
          <SVGIcon icon={isChecked ? "StarFill" : "StarLine"} size={"md"} />
        </button>
      </div>
    </div>
  );
};

export default CardListTitle;
