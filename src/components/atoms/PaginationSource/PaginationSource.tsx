import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const PaginationSourceVariants = cva("transition-all h-1 rounded-full", {
  variants: {
    isActive: {
      true: "bg-primary-normal w-5",
      false: "bg-fill-strong w-3",
    },
  },
});

interface PaginationSourceProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentIndex: number;
  activeIndex: number;
  clickCursor: (i: number) => void;
}

const PaginationSource = ({
  currentIndex,
  activeIndex,
  clickCursor,
  ...props
}: PaginationSourceProps) => {
  const isActive = currentIndex === activeIndex;
  return (
    <button
      onClick={() => clickCursor(currentIndex)}
      className={cn(PaginationSourceVariants({ isActive }))}
      {...props}
    ></button>
  );
};

export default PaginationSource;
