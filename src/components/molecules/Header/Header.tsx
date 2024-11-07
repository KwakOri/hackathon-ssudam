import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { PropsWithChildren } from "react";

interface HeaderProps {
  intent: "main" | "labelWithIcon" | "label";
}

const Header = ({ intent, children }: PropsWithChildren<HeaderProps>) => {
  return (
    <div className="flex justify-between w-full h-[58px] border-b border-line-normal">
      {intent === "main" ? (
        <div>
          <div className="flex justify-center items-center w-9 h-[26px] text-title1 font-semibold">
            LOGO
          </div>
          <h2 className="text-body1 font-semibold"></h2>
        </div>
      ) : (
        <>
          <button>
            <SVGIcon icon={"Menu"} />
          </button>
          {intent === "label" ? (
            <Paragraph>Label</Paragraph>
          ) : (
            <div>
              <div className="" id="icon-dummy"></div>
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
