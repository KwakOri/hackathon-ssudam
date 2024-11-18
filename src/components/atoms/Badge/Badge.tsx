import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const BadgeVariants = cva(
  "px-[7px] py-[5px] rounded-[6px] text-[10px] leading-[130%] font-semibold",
  {
    variants: {
      intent: {
        primary: "bg-primary-heavy text-static-white",
        primary_light: "bg-primary-light text-primary-strong",
        purple: "bg-quaternary-strong text-static-white",
        purple_light: "bg-quaternary-light text-quaternary-strong",
        brown: "bg-secondary-strong text-static-white",
        brown_light: "bg-secondary-light text-secondary-strong",
        yellow: "bg-accent-orange-normal text-static-white",
        yellow_light: "bg-accent-orange-light text-accent-orange-strong",
        red: "bg-accent-red-normal text-static-white",
        red_light: "bg-accent-red-light text-accent-red-strong",
        green: "bg-accent-green-normal text-static-white",
        green_light: "bg-accent-green-light text-accent-green-strong",
        blue: "bg-accent-blue-normal text-static-white",
        blue_light: "bg-accent-blue-light text-accent-blue-strong",
        gray: "bg-dimmer-normal text-common-100",
        gray_light: "bg-fill-normal text-label-normal",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface BadgeProps extends VariantProps<typeof BadgeVariants> {
  className?: string;
}

const Badge = ({
  children,
  intent,
  className,
}: PropsWithChildren<BadgeProps>) => {
  return (
    <div className={cn(BadgeVariants({ intent, className }))}>{children}</div>
  );
};

export default Badge;
