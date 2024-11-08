import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { IconMapTypes } from "@/icons/icons";
import { ButtonHTMLAttributes } from "react";

interface SidebarCategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconMapTypes;
  label: string;
  isActive?: boolean;
  isDropDown?: boolean;
}

const SidebarCategory = ({
  icon,
  label,
  isActive = false,
  isDropDown = false,
  ...props
}: SidebarCategoryProps) => {
  return (
    <button
      {...props}
      className={`w-full py-3 px-4 flex justify-between items-center relative ${
        isActive && "bg-primary-light"
      }`}
    >
      {isActive && (
        <div
          id="verticalBar"
          className="absolute left-0 w-[3px] h-full bg-primary-strong"
        ></div>
      )}
      <div className="flex items-center gap-3">
        <SVGIcon
          icon={icon}
          size={"md"}
          color={isActive ? "primary" : "black"}
        />
        <Paragraph
          className={isActive ? "text-primary-heavy" : "text-label-normal"}
        >
          {label}
        </Paragraph>
      </div>
      {isDropDown && (
        <button>
          <SVGIcon icon={"ChevronDown"} size={"sm"} />
        </button>
      )}
    </button>
  );
};

export default SidebarCategory;
