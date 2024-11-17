import CardListTitle from "@/components/molecules/CardListTitle";
import Badge from "@/components/atoms/Badge";
import Paragraph from "@/components/atoms/Paragraph";
import { PropsWithChildren } from "react";

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

interface CardListBoxProps extends PropsWithChildren {
  title: string;
  year: string;
  month: string;
  day: string;
  isChecked: boolean;
  badges: BadgeInfo[];
  content: string;
  from: string;
}

const CardListBox = ({
  title,
  year,
  month,
  day,
  isChecked,
  badges,
  content,
  from,
}: CardListBoxProps) => {
  return (
    <div className="flex flex-col gap-1 w-[350px]">
      <CardListTitle
        title={title}
        year={year}
        month={month}
        day={day}
        from={from}
        isChecked={isChecked}
      />
      <div className="flex gap-1">
        {badges.map((badge, index) => (
          <Badge key={index} intent={badge.intent}>
            {badge.content}
          </Badge>
        ))}
      </div>
      <Paragraph
        fontSize={"body2"}
        fontWeight={"medium"}
        className={"text-label-normal overflow-hidden text-ellipsis"}
      >
        {content}
      </Paragraph>
    </div>
  );
};

export default CardListBox;
