"use client";

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
}

const FilterTitle = ({ title, select }: SelectInputSectionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const toggleSelectBox = () => {
    setIsOpen((prev) => !prev);
  };

  const clickSelectInput = (value: string) => {
    setSelectedValue(value);
    toggleSelectBox();
  };

  return (
    <div className="flex justify-between mx-4 relative">
      <Paragraph
        fontSize={"heading2"}
        fontWeight={"semibold"}
        className="text-label-strong flex justify-center items-start pt-3"
      >
        {title}
      </Paragraph>
      <article className=" flex flex-col">
        <section
          onClick={toggleSelectBox}
          className="w-full flex items-center justify-between cursor-pointer pr-3 relative"
        >
          <div className="flex-grow">
            {selectedValue ? (
              <SelectInput isSelected={false}>{selectedValue}</SelectInput>
            ) : (
              <Paragraph
                fontSize={"body2"}
                fontWeight={"medium"}
                className="text-label-neutral p-3"
              >
                최신순
              </Paragraph>
            )}
          </div>

          <SVGIcon
            icon={"ChevronDown"}
            size={"md"}
            className={cn(FilterTitleVariants({ isOpen }))}
          />
        </section>

        {isOpen && (
          <section className="flex flex-col w-[130px]  bg-background-normal border border-line-normal rounded-[8px] p-[8px] z-10 absolute top-full right-0">
            {select?.map((item) => (
              <div key={item.value} className="rounded-[4px] bg-white mb-2">
                <SelectInput
                  value={item.value}
                  isSelected={item.value === selectedValue}
                  onClick={() => clickSelectInput(item.value)}
                >
                  {item.label}
                </SelectInput>
              </div>
            ))}
          </section>
        )}
      </article>
    </div>
  );
};

export default FilterTitle;
