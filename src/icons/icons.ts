import ArrowDown from "/public/svgs/arrow_down.svg";
import ArrowLeft from "/public/svgs/arrow_left.svg";
import ArrowRight from "/public/svgs/arrow_right.svg";
import ArrowUp from "/public/svgs/arrow_up.svg";
import Book from "/public/svgs/book.svg";
import Chat from "/public/svgs/chat.svg";
import Check from "/public/svgs/check.svg";
import ChevronDown from "/public/svgs/chevron_down.svg";
import ChevronLeft from "/public/svgs/chevron_left.svg";
import ChevronRight from "/public/svgs/chevron_right.svg";
import ChevronUp from "/public/svgs/chevron_up.svg";
import Close from "/public/svgs/close.svg";
import Doctor from "/public/svgs/doctor.svg";
import Expand from "/public/svgs/expand.svg";
import Fail from "/public/svgs/fail.svg";
import FilterFill from "/public/svgs/filter_fill.svg";
import FilterLine from "/public/svgs/filter_line.svg";
import Home from "/public/svgs/home.svg";
import InIcon from "/public/svgs/in.svg";
import Info from "/public/svgs/info.svg";
import LocationFill from "/public/svgs/location_fill.svg";
import LocationLine from "/public/svgs/location_line.svg";
import Map from "/public/svgs/map.svg";
import Meatball from "/public/svgs/meatball.svg";
import Menu from "/public/svgs/menu.svg";
import Mic from "/public/svgs/mic.svg";
import Out from "/public/svgs/out.svg";
import People from "/public/svgs/people.svg";
import Play from "/public/svgs/play.svg";
import Reset from "/public/svgs/reset.svg";
import Setting from "/public/svgs/setting.svg";
import Share from "/public/svgs/share.svg";
import StarFill from "/public/svgs/star_fill.svg";
import StarLine from "/public/svgs/star_line.svg";
import Success from "/public/svgs/success.svg";
import Time from "/public/svgs/time.svg";
import Upload from "/public/svgs/upload.svg";
import User from "/public/svgs/user.svg";
import Voice from "/public/svgs/voice.svg";
import Warning from "/public/svgs/warning.svg";

export const IconMap = {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Book,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Close,
  Doctor,
  Expand,
  Fail,
  FilterLine,
  FilterFill,
  Home,
  InIcon,
  Info,
  LocationLine,
  LocationFill,
  Map,
  Meatball,
  Menu,
  Mic,
  Out,
  People,
  Play,
  Reset,
  Setting,
  Share,
  StarFill,
  StarLine,
  Success,
  Upload,
  User,
  Voice,
  Warning,
  Time,
} as const;

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
