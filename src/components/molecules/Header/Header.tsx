import Avatar from "@/components/atoms/Avatar";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { PropsWithChildren } from "react";

interface HeaderProps {
  intent: "main" | "labelWithIcon" | "label";
  title?: string;
}

const Header = ({
  intent,
  children,
  title = "title",
}: PropsWithChildren<HeaderProps>) => {
  return (
    <div className="px-4 flex justify-between items-center w-full h-[58px] border-b border-line-normal">
      {intent === "main" ? (
        <>
          <div className="flex gap-2">
            <Paragraph>LOGO</Paragraph>
            <Paragraph>{title}</Paragraph>
          </div>
        </>
      ) : (
        <>
          <button>
            <SVGIcon icon={"ArrowLeft"} />
          </button>
          {intent === "label" ? (
            <Paragraph>{title}</Paragraph>
          ) : (
            <div className="flex gap-2">
              <Avatar size={"xs"} shape={"square"} />
              <Paragraph>{title}</Paragraph>
            </div>
          )}
        </>
      )}
      <button>
        <SVGIcon icon={"Menu"} />
      </button>
    </div>
  );
};

export default Header;
