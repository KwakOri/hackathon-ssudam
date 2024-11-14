export const IconMap = {
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
  FilterLine: () => import("/public/svgs/filter_line.svg"),
  FilterFill: () => import("/public/svgs/filter_fill.svg"),
  Home: () => import("/public/svgs/home.svg"),
  InIcon: () => import("/public/svgs/in.svg"),
  Info: () => import("/public/svgs/info.svg"),
  LocationLine: () => import("/public/svgs/location_line.svg"),
  LocationFill: () => import("/public/svgs/location_fill.svg"),
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
  StarFill: () => import("/public/svgs/star_fill.svg"),
  StarLine: () => import("/public/svgs/star_line.svg"),
  Success: () => import("/public/svgs/success.svg"),
  Upload: () => import("/public/svgs/upload.svg"),
  User: () => import("/public/svgs/user.svg"),
  Voice: () => import("/public/svgs/voice.svg"),
  Warning: () => import("/public/svgs/warning.svg"),
  Time: () => import("/public/svgs/time.svg"),
};

export type IconMapTypes = keyof typeof IconMap;

export const getVariantsWithCommonClass = (
  icons: IconMapTypes[],
  commonClass: string
) => {
  return icons.reduce((acc, icon) => {
    acc[icon] = `${commonClass}`;
    return acc;
  }, {} as { [key in IconMapTypes]: string });
};

export const IconSizes = {
  lg: 24,
  md: 20,
  sm: 16,
};
