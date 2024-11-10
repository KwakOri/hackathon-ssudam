import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const CheckInputLabelVariants = cva(
  "flex justify-center items-center overflow-hidden",
  {
    variants: {
      disabled: {
        true: "opacity-65",
        false: "opacity-100",
      },
      checked: {
        true: "bg-primary-strong border border-primary-strong",
        false: "bg-transparent border border-line-heavy",
      },
      type: {
        checkbox: "rounded-[4px]",
        radio: "rounded-full",
      },
      size: {
        md: "w-5 h-5",
        sm: "w-4 h-4",
      },
    },
    defaultVariants: {
      disabled: false,
      size: "md",
    },
  }
);

interface CheckInputProps extends VariantProps<typeof CheckInputLabelVariants> {
  disabled?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size: "md" | "sm";
  type: "checkbox" | "radio";
}

const CheckInput = ({
  disabled,
  checked,
  onChange,
  size,
  type,
}: CheckInputProps) => {
  return (
    <label>
      <div
        className={cn(
          CheckInputLabelVariants({ disabled, checked, size, type })
        )}
      >
        {type === "checkbox" && (
          <SVGIcon
            icon={"Check"}
            size={size}
            className={`fill-static-white stroke-static-white ${
              !checked && "hidden"
            }`}
          />
        )}
        {type === "radio" && (
          <div
            className={`rounded-full bg-static-white ${!checked && "hidden"} ${
              size === "md" ? "w-2 h-2" : "w-[7px] h-[7px]"
            }`}
          ></div>
        )}
      </div>
      <input
        className="hidden"
        type={"checkbox"}
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => {
          onChange(checked);
        }}
      />
    </label>
  );
};

export default CheckInput;
