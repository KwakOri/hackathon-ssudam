import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import Paragraph from "../Paragraph";

const ChipVariants = cva("rounded-full px-[12px]", {
  variants: {
    isActive: {
      true: "bg-primary-light text-primary-heavy border border-primary-heavy",
      false:
        "bg-background-normal text-label-neutral border border-line-normal",
    },
    isIcon: {
      true: "py-[8px]",
      false: "py-[6px]",
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

interface ChipProps
  extends VariantProps<typeof ChipVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Chip = ({
  children,
  isIcon,
  isActive,
  className,
  ...props
}: PropsWithChildren<ChipProps>) => {
  return (
    <button
      className={cn(ChipVariants({ isActive, isIcon, className }))}
      {...props}
    >
      {isIcon ? (
        <SVGIcon icon={isActive ? "FilterFill" : "FilterLine"} size={"sm"} />
      ) : (
        <Paragraph
          fontSize={"label"}
          fontWeight={"medium"}
          className="text-label-neutral"
        >
          {children}
        </Paragraph>
      )}
    </button>
  );
};

export default Chip;
