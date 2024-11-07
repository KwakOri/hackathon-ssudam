import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const PaginationSourceVariants = cva(" h-1 rounded-full", {
  variants: {
    isActive: {
      true: "bg-primary-normal w-5",
      false: "bg-fill-strong w-3",
    },
  },
});

interface PaginationSourceProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof PaginationSourceVariants> {}

const PaginationSource = ({ isActive, ...props }: PaginationSourceProps) => {
  return (
    <button
      className={cn(PaginationSourceVariants({ isActive }))}
      {...props}
    ></button>
  );
};

export default PaginationSource;
