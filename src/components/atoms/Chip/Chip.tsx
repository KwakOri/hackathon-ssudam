import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const ChipVariants = cva("", {
  variants: {
    isActive: {
      true: "bg-primary- text-static-white",
      false: "bg-background-normal text-label-neutral",
    },
    type: {
      icon: "",
      text: "",
    },
  },
});
