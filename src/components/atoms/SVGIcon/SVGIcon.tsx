import { IconMap, IconMapTypes, IconSizes } from "@/icons/icons";
import { cva, VariantProps } from "class-variance-authority";
import { lazy, Suspense, useMemo } from "react";

const SVGIconVariants = cva("", {
  variants: {
    color: {
      gray: "fill-label-neutral",
      white: "fill-common-100",
      black: "fill-label-strong",
      primary: "fill-primary-heavy",
    },
    bold: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      color: "gray",
      bold: true,
      class: "stroke-label-neutral",
    },
    {
      color: "white",
      bold: true,
      class: "stroke-common-100",
    },
    {
      color: "black",
      bold: true,
      class: "stroke-label-strong",
    },
    {
      color: "primary",
      bold: true,
      class: "stroke-primary-heavy",
    },
  ],
  defaultVariants: {
    color: "gray",
    bold: false,
  },
});

interface SVGIconProps extends VariantProps<typeof SVGIconVariants> {
  icon: IconMapTypes;
  size?: "lg" | "md" | "sm";
  className?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  bold = false,
  color = "gray",
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
        className={SVGIconVariants({ color, bold, className })}
        width={IconSizes[size]}
        height={IconSizes[size]}
      />
    </Suspense>
  );
};

export default SVGIcon;
