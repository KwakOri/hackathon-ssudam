import { useState } from "react";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cva, VariantProps } from "class-variance-authority";

const CardTitleVariants = cva("", {
  variants: {
    isChecked: {
      true: "StarFill",
      false: "StarLine",
    },
  },
});

interface CardTitleProps extends VariantProps<typeof CardTitleVariants> {
  title: string;
  initialChecked?: boolean;
}

const CardTitle = ({ title, initialChecked = false }: CardTitleProps) => {
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
          From
        </Paragraph>
        <button onClick={handleToggleCheck}>
          <SVGIcon icon={isChecked ? "StarFill" : "StarLine"} size={"md"} />
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
