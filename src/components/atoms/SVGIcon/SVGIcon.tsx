/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  getVariantsWithCommonClass,
  IconMap,
  IconMapTypes,
  IconSizes,
} from "@/icons/icons";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const IconVariants = getVariantsWithCommonClass(
  Object.keys(IconMap) as IconMapTypes[],
  "fill-label-neutral"
);

const SVGIconVariants = cva("fill-label-neutral", {
  variants: {
    icon: {
      ...IconVariants,

      StarFill: "fill-primary-strong",
      FilterFill: "fill-primary-strong",
    },
  },
  defaultVariants: {
    icon: "StarLine",
  },
});

interface SVGIconProps extends VariantProps<typeof SVGIconVariants> {
  size?: "lg" | "md" | "sm";
  className?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  size = "lg",
  className,
}: SVGIconProps) => {
  const Icon = IconMap[icon as IconMapTypes];

  return (
    <Icon
      className={cn(SVGIconVariants({ icon, className }))}
      width={IconSizes[size]}
      height={IconSizes[size]}
    />
  );
};

export default SVGIcon;
