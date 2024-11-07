import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const ButtonVariants = cva("", {
  variants: {
    intent: {
      greenFill: "text-static-white bg-primary-heavy",
      greenWeak: "",
    },
    size: {
      large: "text-heading2 font-semibold",
    },
  },
  defaultVariants: {
    intent: "greenFill",
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
