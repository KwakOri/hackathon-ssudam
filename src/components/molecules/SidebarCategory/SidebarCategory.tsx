import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { IconMapTypes } from "@/icons/icons";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

interface SidebarCategoryProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconMapTypes;
  label: string;
  isActive?: boolean;
  isDropDown?: boolean;
}

const SidebarCategoryIconVariants = cva("", {
  variants: {
    isActive: {
      true: "fill-primary-heavy",
      false: "fill-label-strong",
    },
  },
});

const SidebarCategory = ({
  icon,
  label,
  isActive = false,
  isDropDown = false,
  ...props
}: SidebarCategoryProps) => {
  return (
    <div
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
        {/* SVGIcon에서 StarActiveFalse는 export 관련 문제로 color 관련 className 예외 코드를 추가함 */}
        <SVGIcon
          icon={icon}
          size={"md"}
          className={cn(SidebarCategoryIconVariants({ isActive }))}
        />

        <Paragraph
          className={isActive ? "text-primary-heavy" : "text-label-normal"}
        >
          {label}
        </Paragraph>
      </div>
      {isDropDown && (
        <div>
          <SVGIcon icon={"ChevronDown"} size={"sm"} />
        </div>
      )}
    </div>
  );
};

export default SidebarCategory;
