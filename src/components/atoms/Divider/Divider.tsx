import { cva, VariantProps } from "class-variance-authority";

const DividerVariants = cva(" bg-line-normal rounded-full", {
  variants: {
    intent: {
      vertical: "w-[2px] h-6",
      horizontal: "w-full h-[2px]",
    },
  },
  defaultVariants: { intent: "vertical" },
});

const Divider = ({ intent }: VariantProps<typeof DividerVariants>) => {
  return <div className={DividerVariants({ intent })}></div>;
};

export default Divider;
