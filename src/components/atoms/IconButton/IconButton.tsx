import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import SVGIcon from "@/components/atoms/SVGIcon";

const IconButtonVariants = cva("rounded-full", {
  variants: {
    intent: {
      fill: "bg-primary-heavy ",
      white: "bg-background-normal ",
      light: "bg-primary-light ",
    },
    size: {
      sm: "p-[10px]",
      md: "p-[13.33px]",
      lg: "p-[16.67px]",
    },
  },
  defaultVariants: {
    intent: "fill",
    size: "sm",
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
  intent = "fill",
  size = "sm",
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
        color={intent === "fill" ? "white" : "primary"}
      />
    </button>
  );
};

export default IconButton;
