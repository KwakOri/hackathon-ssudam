"use client";

import Chip from "@/components/atoms/Chip";
import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import SelectInput from "@/components/atoms/SelectInput";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { useState } from "react";

const FilterTitleVariants = cva("flex justify-between items-center", {
  variants: {
    isOpen: {
      true: "rotate-180",
      false: "rotate-0",
    },
  },
});

interface SelectInfo {
  value: string;
  label: string;
}

interface SelectInputSectionProps {
  title: string;
  select?: SelectInfo[];
  max?: number;
}

const MainFilter = ({ title, select, max }: SelectInputSectionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSelectBox = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-[8px]">
          <Paragraph
            fontSize={"body1"}
            fontWeight={"semibold"}
            className="text-label-normal flex justify-center items-start pt-3"
          >
            {title}
          </Paragraph>
          <Paragraph
            fontSize={"caption1"}
            fontWeight={"medium"}
            className="text-label-alternative flex justify-center items-start mt-[18px]"
          >
            최대{max}개
          </Paragraph>
        </div>

        <article className=" flex flex-col items-center justify-center">
          <section
            onClick={toggleSelectBox}
            className="w-full flex items-center justify-between cursor-pointer pr-3 "
          >
            <SVGIcon
              icon={"ChevronDown"}
              size={"md"}
              className={cn(FilterTitleVariants({ isOpen }))}
            />
          </section>
        </article>
      </div>
      {isOpen && (
        <section className="flex flex-wrap gap-[8px] my-1">
          {select?.map((item) => (
            <div key={item.value} className="flex">
              <Chip isIcon={false}>{item.label}</Chip>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default MainFilter;
