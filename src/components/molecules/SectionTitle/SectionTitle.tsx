import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className={"w-full px-4 flex items-center justify-between"}>
      <Paragraph fontSize={"body1"} fontWeight={"semibold"}>
        {children}
      </Paragraph>
      <div className="flex gap-1 items-center">
        <Paragraph
          fontSize={"label"}
          fontWeight={"medium"}
          className={"text-label-alternative"}
        >
          더보기
        </Paragraph>
        <SVGIcon
          icon={"ChevronRight"}
          size="sm"
          className={"fill-label-alternative"}
        />
      </div>
    </div>
  );
};

export default SectionTitle;
