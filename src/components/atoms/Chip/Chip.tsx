import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";

const ChipVariants = cva("rounded-full px-[12px] py-[6px]", {
  variants: {
    isActive: {
      true: "bg-primary-light text-primary-heavy border border-primary-heavy",
      false:
        "bg-background-normal text-label-neutral border border-line-normal",
    },
    isIcon: {
      true: "px-[12px] py-[8px]",
      false: "px-[12px] py-[6px]",
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
  className,
  ...props
}: PropsWithChildren<ChipProps>) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      className={cn(ChipVariants({ isActive, isIcon, className }))}
      onClick={handleClick}
      {...props}
    >
      {isIcon ? (
        <SVGIcon icon={isActive ? "FilterFill" : "FilterLine"} size={"sm"} />
      ) : (
        children
      )}
    </button>
  );
};

export default Chip;
