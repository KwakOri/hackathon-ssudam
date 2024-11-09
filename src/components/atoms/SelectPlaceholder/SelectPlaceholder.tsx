import Paragraph from "@/components/atoms/Paragraph";
import { PropsWithChildren } from "react";

const SelectPlaceholder = ({ children }: PropsWithChildren) => {
  return (
    <Paragraph
      fontSize={"body2"}
      fontWeight={"medium"}
      className={"text-label-alternative p-3"}
    >
      {children}
    </Paragraph>
  );
};

export default SelectPlaceholder;
