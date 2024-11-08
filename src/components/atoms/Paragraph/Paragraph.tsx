import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const ParagraphVariants = cva("text-label-strong", {
  variants: {
    fontSize: {
      title1: "text-[28px] leading-[135%]",
      title2: "text-[24px] leading-[140%]",
      heading1: "text-[20px] leading-[140%]",
      heading2: "text-[18px] leading-[140%]",
      body1: "text-[16px] leading-[160%]",
      body2: "text-[14px] leading-[160%]",
      label: "text-[15px] leading-[150%]",
      caption1: "text-[12px] leading-[130%]",
      caption2: "text-[10px] leading-[130%]",
    },
    fontWeight: {
      regular: "font-regular",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    fontSize: "body1",
    fontWeight: "regular",
  },
});

interface ParagraphProps extends VariantProps<typeof ParagraphVariants> {
  className?: string;
}

const Paragraph = ({
  children,
  fontSize,
  fontWeight,
  className,
}: PropsWithChildren<ParagraphProps>) => {
  return (
    <p className={cn(ParagraphVariants({ fontSize, fontWeight, className }))}>
      {children}
    </p>
  );
};

export default Paragraph;
