import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "sm" | "md" | "lg";
}

const TextButton = ({
  children,
  size,
  ...props
}: PropsWithChildren<TextButtonProps>) => {
  const fontSize = {
    sm: "label",
    md: "body1",
    lg: "heading2",
  };
  return (
    <button className={"flex gap-1 items-center"} {...props}>
      <Paragraph
        fontSize={fontSize[size] as "label" | "body1" | "heading2"}
        fontWeight={"medium"}
        className={"text-label-neutral"}
      >
        {children}
      </Paragraph>
      <SVGIcon
        icon="ArrowRight"
        size={size}
        className={"fill-label-alternative"}
      />
    </button>
  );
};

export default TextButton;
