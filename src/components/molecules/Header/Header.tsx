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
    <div className="flex justify-between w-full h-[58px] border-b border-line-normal">
      {intent === "main" ? (
        <>
          <div>
            <div className="flex justify-center items-center w-9 h-[26px] text-title1 font-semibold">
              LOGO
            </div>
            <h2 className="text-body1 font-semibold"></h2>
          </div>
        </>
      ) : (
        <>
          <button>
            <SVGIcon icon={"Menu"} />
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
