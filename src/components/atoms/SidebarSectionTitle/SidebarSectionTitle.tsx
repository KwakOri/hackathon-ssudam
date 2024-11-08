import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import { PropsWithChildren } from "react";

const SidebarSectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <Paragraph
      fontSize={"caption1"}
      fontWeight={"medium"}
      className="text-label-neutral"
    >
      {children}
    </Paragraph>
  );
};

export default SidebarSectionTitle;
