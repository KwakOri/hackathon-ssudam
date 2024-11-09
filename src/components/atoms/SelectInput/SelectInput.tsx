import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const SelectInputVariants = cva(
  " flex justify-between items-center w-full p-3",
  {
    variants: {
      isSelected: {
        true: "text-primary-heavy bg-primary-light",
        false: "text-label-neutral bg-background-normal",
      },
    },
  }
);

interface SelectInputProps
  extends VariantProps<typeof SelectInputVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
}

const SelectInput = ({
  children,
  isSelected,
  ...props
}: PropsWithChildren<SelectInputProps>) => {
  return (
    <button {...props} className="w-full">
      <Paragraph
        fontSize={"body2"}
        fontWeight={"medium"}
        className={cn(SelectInputVariants({ isSelected }))}
      >
        {children}
        {isSelected && (
          <SVGIcon icon={"Check"} size={"sm"} className="fill-primary-strong" />
        )}
      </Paragraph>
    </button>
  );
};

export default SelectInput;
