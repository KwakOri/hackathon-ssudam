import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import SVGIcon from "@/components/atoms/SVGIcon";

const ChipVariants = cva("rounded-full ", {
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
    isActive: true,
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
        <SVGIcon
          icon={isActive ? "FilterActiveTrue" : "FilterActiveFalse"}
          size={"sm"}
          color={isActive ? "primary" : "gray"}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Chip;
