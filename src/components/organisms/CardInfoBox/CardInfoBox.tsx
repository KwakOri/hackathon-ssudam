import CardTitle from "@/components/molecules/CardTitle";
import Badge from "@/components/atoms/Badge";
import { PropsWithChildren } from "react";
import OptionTitle from "@/components/molecules/OptionTitle";

interface BadgeInfo {
  content: React.ReactNode;
  intent:
    | "primary"
    | "primary_light"
    | "purple"
    | "purple_light"
    | "brown"
    | "brown_light"
    | "yellow"
    | "yellow_light"
    | "red"
    | "red_light"
    | "green"
    | "green_light"
    | "blue"
    | "blue_light"
    | "gray"
    | "gray_light";
}

interface OptionInfo {
  option: string;
  optionText: string;
}

interface CardInfoBoxProps {
  title: string;
  isChecked: boolean;
  badges: BadgeInfo[];
  options: OptionInfo[];
  isOption: boolean;
}

const CardInfoBox = ({
  title,
  isChecked,
  badges,
  options,
  isOption,
}: PropsWithChildren<CardInfoBoxProps>) => {
  return (
    <div
      className={`flex flex-col gap-1 bg-background-normal rounded-[18px] p-[16px] border border-line-normal ${
        isOption ? "w-[200px]" : "w-[240px]"
      }`}
    >
      <CardTitle title={title} isChecked={isChecked} />
      <div className="flex gap-1">
        {badges.map((badge, index) => (
          <Badge key={index} intent={badge.intent}>
            {badge.content}
          </Badge>
        ))}
      </div>

      {isOption && (
        <div className="flex flex-col gap-[8px] mt-[16px] ">
          {options.map((optionInfo, index) => (
            <OptionTitle
              key={index}
              option={optionInfo.option}
              optionText={optionInfo.optionText}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardInfoBox;
