import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const IconButtonVariants = cva(
  "rounded-full flex justify-center items-center",
  {
    variants: {
      intent: {
        fill: "bg-primary-heavy ",
        white: "bg-background-normal box-border border-line-normal",
        light: "bg-primary-light ",
      },
      size: {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-10 h-10",
      },
    },
    compoundVariants: [
      {
        intent: "white",
        size: "sm",
        className: "border",
      },
      {
        intent: "white",
        size: "md",
        className: "border-[1.33px]",
      },
      {
        intent: "white",
        size: "lg",
        className: "border-[1.66px]",
      },
    ],
    defaultVariants: {
      intent: "fill",
      size: "md",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    intent: {
      fill: "fill-static-white",
      white: "fill-primary-heavy",
      light: "fill-primary-heavy",
    },
  },
});

interface IconButtonProps
  extends VariantProps<typeof IconButtonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "lg" | "md" | "sm";
  intent?: "fill" | "white" | "light";
}

const IconButton = ({
  children,
  intent,
  size,
  className,
  ...props
}: PropsWithChildren<IconButtonProps>) => {
  return (
    <button
      className={cn(IconButtonVariants({ intent, size, className }))}
      {...props}
    >
      <SVGIcon
        icon={"ChevronRight"}
        size={size}
        className={cn(iconVariants({ intent }))}
      />
    </button>
  );
};

export default IconButton;
