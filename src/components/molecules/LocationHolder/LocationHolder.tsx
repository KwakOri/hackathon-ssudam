import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { PropsWithChildren } from "react";

const LocationHolder = ({ children }: PropsWithChildren) => {
  return (
    <div className={"flex gap-1 items-center"}>
      <SVGIcon
        icon={"LocationFill"}
        size={"sm"}
        className={"fill-accent-red-normal"}
      />
      <Paragraph
        fontSize={"label"}
        fontWeight={"medium"}
        className={"text-accent-red-normal"}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default LocationHolder;
