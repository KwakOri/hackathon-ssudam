import Avatar from "@/components/atoms/Avatar";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { PropsWithChildren } from "react";

interface HeaderProps {
  intent: "main" | "labelWithMenuIcon" | "label" | "labelWithCloseIcon";
  title?: string;
  leftIconOnClink?: () => void;
  rightIconOnClink?: () => void;
}

const Header = ({
  intent,
  children,
  title = "title",
}: PropsWithChildren<HeaderProps>) => {
  return (
    <div className="px-4 flex justify-between items-center w-full h-[58px] border-b border-line-normal">
      {intent === "main" && (
        <>
          <div className="flex gap-2">
            <Paragraph>LOGO</Paragraph>
            <Paragraph>{title}</Paragraph>
          </div>
          <button>
            <SVGIcon icon={"Menu"} />
          </button>
        </>
      )}
      {(intent === "labelWithMenuIcon" || intent === "label") && (
        <>
          <button>
            <SVGIcon icon={"ArrowLeft"} />
          </button>
          <div className="flex gap-2">
            {intent === "labelWithMenuIcon" && (
              <Avatar avatar={""} size={"xs"} shape={"square"} />
            )}
            <Paragraph>{title}</Paragraph>
          </div>
          <button>
            <SVGIcon icon={"Menu"} />
          </button>
        </>
      )}

      {intent === "labelWithCloseIcon" && (
        <>
          <button className="opacity-0 pointer-events-none">
            <SVGIcon icon={"ArrowLeft"} />
          </button>
          <div className="flex gap-2">
            <Paragraph>{title}</Paragraph>
          </div>
          <button>
            <SVGIcon icon={"Close"} />
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
