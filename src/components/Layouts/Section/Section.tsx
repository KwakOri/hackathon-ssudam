import { PropsWithChildren } from "react";

interface SectionProps {
  className?: string;
}

const Section = ({ children, className }: PropsWithChildren<SectionProps>) => {
  return (
    <section className={`flex flex-col gap-3 ${className}`}>{children}</section>
  );
};

export default Section;
