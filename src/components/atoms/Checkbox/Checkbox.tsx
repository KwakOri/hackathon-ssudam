import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const CheckboxLabelVariants = cva(
  "flex justify-center items-center rounded-[4px] overflow-hidden",
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

interface CheckboxProps extends VariantProps<typeof CheckboxLabelVariants> {
  disabled?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size: "md" | "sm";
}

const Checkbox = ({ disabled, checked, onChange, size }: CheckboxProps) => {
  return (
    <label>
      <div className={cn(CheckboxLabelVariants({ disabled, checked, size }))}>
        <SVGIcon
          icon={"Check"}
          size={size}
          className={`fill-static-white ${!checked && "hidden"}`}
        />
      </div>
      <input
        className="hidden"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
    </label>
  );
};

export default Checkbox;
