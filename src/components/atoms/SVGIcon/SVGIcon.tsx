import {
  getVariantsWithCommonClass,
  IconMap,
  IconMapTypes,
  IconSizes,
} from "@/icons/icons";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { lazy, Suspense, useMemo } from "react";

const IconVariants = getVariantsWithCommonClass(
  Object.keys(IconMap) as IconMapTypes[],
  "fill-label-neutral"
);

const SVGIconVariants = cva("fill-label-neutral", {
  variants: {
    icon: {
      ...IconVariants,
      StarLine: "stroke-label-alternative fill-none",
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
  icon: IconMapTypes;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  size = "lg",
  className,
}: SVGIconProps) => {
  const Icon: React.LazyExoticComponent<
    React.FC<React.SVGProps<SVGSVGElement>>
  > = useMemo(() => lazy(IconMap[icon]), [icon]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: IconSizes[size] + "px",
            height: IconSizes[size] + "px",
          }}
          className={`bg-transparent rounded-md`}
        ></div>
      }
    >
      <Icon
        className={cn(SVGIconVariants({ icon, className }))}
        width={IconSizes[size]}
        height={IconSizes[size]}
      />
    </Suspense>
  );
};

export default SVGIcon;
