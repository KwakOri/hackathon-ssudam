import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const BorderVariants = cva("absolute inset-0 border", {
  variants: {
    intent: {
      redFill: "border-accent-red-light",
      greenFill: "border-primary-light",
      dark: "border-line-normal",
    },
  },
  defaultVariants: {
    intent: "dark",
  },
});

interface BorderProps extends VariantProps<typeof BorderVariants> {
  className?: string;
}

const Border = ({ intent, className }: BorderProps) => {
  return <div className={cn(BorderVariants({ intent, className }))}></div>;
};

export default Border;
