"use client";

import Divider from "@/components/atoms/Divider";
import SelectInput from "@/components/atoms/SelectInput";
import SelectPlaceholder from "@/components/atoms/SelectPlaceholder";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { useState } from "react";

const SelectInputBoxButtonProps = cva(
  "fill-label-alternative transition-all duration-300",
  {
    variants: {
      isOpen: {
        true: " rotate-180",
        false: " rotate-0",
      },
    },
  }
);

const SelectInputSectionProps = cva("transition-all duration-300", {
  variants: {
    isOpen: {
      true: "h-full",
      false: "h-0",
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

const selectDummies = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
  { value: "option3", label: "option3" },
  { value: "option4", label: "option4" },
  { value: "option5", label: "option5" },
  { value: "option6", label: "option6" },
];

const SelectInputBox = () => {
  const [selectedValue, setSelectedValue] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSelectBox = () => {
    setIsOpen((prev) => !prev);
  };
  const clickSelectInput = (value: string) => {
    setSelectedValue(value);
    toggleSelectBox();
  };

  return (
    <article
      className={
        "w-full bg-background-normal rounded-[13px] flex flex-col overflow-hidden border border-line-normal transition-all"
      }
    >
      <section
        onClick={toggleSelectBox}
        className={
          "w-full flex justify-between items-center cursor-pointer pr-3"
        }
      >
        {selectedValue ? (
          <SelectInput isSelected={false}>{selectedValue}</SelectInput>
        ) : (
          <SelectPlaceholder>Placeholder</SelectPlaceholder>
        )}

        <SVGIcon
          icon={"ChevronDown"}
          size={"md"}
          className={cn(SelectInputBoxButtonProps({ isOpen }))}
        />
      </section>
      {isOpen && (
        <>
          <section className="px-3">
            <Divider intent={"horizontal"} />
          </section>
          <section className={cn(SelectInputSectionProps({ isOpen }))}>
            {selectDummies.map((item) => (
              <li key={item.value} className="list-none">
                <SelectInput
                  value={item.value}
                  isSelected={item.value === selectedValue}
                  onClick={() => clickSelectInput(item.value)}
                >
                  {item.label}
                </SelectInput>
              </li>
            ))}
          </section>
        </>
      )}
    </article>
  );
};

export default SelectInputBox;
