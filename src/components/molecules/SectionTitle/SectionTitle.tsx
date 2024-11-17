import Paragraph from "@/components/atoms/Paragraph";
import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className={"w-full px-4 flex items-center justify-between"}>
      <Paragraph fontSize={"body1"} fontWeight={"semibold"}>
        {children}
      </Paragraph>
    </div>
  );
};

export default SectionTitle;
