import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { lazy, Suspense } from "react";

const ICON_MAP = {
  ArrowDown: () => import("/public/svgs/arrow_down.svg"),
  ArrowLeft: () => import("/public/svgs/arrow_left.svg"),
  ArrowRight: () => import("/public/svgs/arrow_right.svg"),
  ArrowUp: () => import("/public/svgs/arrow_up.svg"),
  Book: () => import("/public/svgs/book.svg"),
  Chat: () => import("/public/svgs/chat.svg"),
  Check: () => import("/public/svgs/check.svg"),
  ChevronDown: () => import("/public/svgs/chevron_down.svg"),
  ChevronLeft: () => import("/public/svgs/chevron_left.svg"),
  ChevronRight: () => import("/public/svgs/chevron_right.svg"),
  ChevronUp: () => import("/public/svgs/chevron_up.svg"),
  Close: () => import("/public/svgs/close.svg"),
  Doctor: () => import("/public/svgs/doctor.svg"),
  Expand: () => import("/public/svgs/expand.svg"),
  Fail: () => import("/public/svgs/fail.svg"),
  FilterActiveFalse: () => import("/public/svgs/filter_active_false.svg"),
  FilterActiveTrue: () => import("/public/svgs/filter_active_true.svg"),
  Home: () => import("/public/svgs/home.svg"),
  InIcon: () => import("/public/svgs/in.svg"),
  Info: () => import("/public/svgs/info.svg"),
  Location: () => import("/public/svgs/location.svg"),
  Map: () => import("/public/svgs/map.svg"),
  Meatball: () => import("/public/svgs/meatball.svg"),
  Menu: () => import("/public/svgs/menu.svg"),
  Mic: () => import("/public/svgs/mic.svg"),
  Out: () => import("/public/svgs/out.svg"),
  People: () => import("/public/svgs/people.svg"),
  Play: () => import("/public/svgs/play.svg"),
  Reset: () => import("/public/svgs/reset.svg"),
  Setting: () => import("/public/svgs/setting.svg"),
  Share: () => import("/public/svgs/share.svg"),
  StarActiveFalse: () => import("/public/svgs/star_active_false.svg"),
  StarActiveTrue: () => import("/public/svgs/star_active_true.svg"),
  Success: () => import("/public/svgs/success.svg"),
  Upload: () => import("/public/svgs/upload.svg"),
  User: () => import("/public/svgs/user.svg"),
  Voice: () => import("/public/svgs/voice.svg"),
  Warning: () => import("/public/svgs/warning.svg"),
};

const SVGIconVariants = cva("", {
  variants: {
    color: {
      gray: "fill-label-neutral",
      white: "fill-common-100",
      black: "fill-common-0",
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
      class: "stroke-common-0",
    },
  ],
  defaultVariants: {
    color: "gray",
    bold: false,
  },
});

interface SVGIconProps extends VariantProps<typeof SVGIconVariants> {
  icon: keyof typeof ICON_MAP;
  size?: number;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  bold = false,
  color = "gray",
  size = 24,
}: SVGIconProps) => {
  const Icon: React.LazyExoticComponent<
    React.FC<React.SVGProps<SVGSVGElement>>
  > = lazy(ICON_MAP[icon]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Icon
        className={cn(SVGIconVariants({ color, bold }))}
        width={size}
        height={size}
      />
    </Suspense>
  );
};

export default SVGIcon;
