import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

const ButtonVariants = cva("", {
  variants: {
    intent: {
      greenFill: "text-static-white bg-primary-heavy",
      greenWeak: "text-primary-heavy bg-primary-light",
      dark: "text-static-white bg-label-normal",
      light:
        "text-label-neutral bg-background-normal outline outline-{1px} outline-line-normal",
      weak: "text-static-white bg-line-normal",
      white: "text-primary-heavy bg-background-normal",
      redFill: "text-static-white bg-accent-red-normal",
      redWeak: "text-accent-red-strong bg-accent-red-light",
    },
    size: {
      xl: "text-heading2 font-semibold rounded-[16px] px-[33px] py-[15px]",
      lg: "text-body1 font-semibold rounded-[14px] px-[25px] py-[11px]",
      md: "text-label font-semibold rounded-[10px] px-[19px] py-[8px]",
      sm: "text-caption1 font-semibold rounded-[8px] px-[15px] py-[6px]",
    },
  },
  defaultVariants: {
    intent: "greenFill",
    size: "xl",
  },
});

interface ButtonProps
  extends VariantProps<typeof ButtonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
  children,
  intent,
  size,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(ButtonVariants({ intent, size }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
