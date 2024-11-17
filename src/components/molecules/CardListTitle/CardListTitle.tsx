import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

const CardListTitleVariants = cva("", {
  variants: {
    isChecked: {
      true: "StarFill",
      false: "StarLine",
    },
  },
});

interface CardListTitleProps
  extends VariantProps<typeof CardListTitleVariants> {
  title: string;
  year: string;
  month: string;
  day: string;
  from: string;
  initialChecked?: boolean;
}

const CardListTitle = ({
  title,
  year,
  month,
  day,
  from,
  initialChecked = false,
}: CardListTitleProps) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Paragraph
          fontSize={"caption1"}
          fontWeight={"medium"}
          className={"text-label-neutral"}
        >
          {from}
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
        <button onClick={handleToggleCheck}>
          <SVGIcon icon={isChecked ? "StarFill" : "StarLine"} size={"md"} />
        </button>
      </div>
    </div>
  );
};

export default CardListTitle;
