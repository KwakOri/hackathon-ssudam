import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import { PropsWithChildren } from "react";

const SidebarSectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <Paragraph
      fontSize={"caption1"}
      fontWeight={"medium"}
      className="text-label-neutral px-4"
    >
      {children}
    </Paragraph>
  );
};

export default SidebarSectionTitle;
