import { PropsWithChildren } from "react";
import "./template.css";

export interface templateProps {
  htmlFor: string;
}

/** Primary UI component for user interaction */
export const TemplateComponent = ({
  htmlFor,
  children,
}: PropsWithChildren<templateProps>) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
