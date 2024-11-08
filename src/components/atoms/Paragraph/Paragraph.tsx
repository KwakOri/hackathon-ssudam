import { PropsWithChildren } from "react";

interface ParagraphProps {
  fontSize?:
    | "title1"
    | "title2"
    | "label"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2"
    | "heading1"
    | "heading2";
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  className?: string;
}

const Paragraph = ({
  children,
  fontSize = "body1",
  fontWeight = "semibold",
  className = "",
}: PropsWithChildren<ParagraphProps>) => {
  return (
    <p className={`text-${fontSize} font-${fontWeight} ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
