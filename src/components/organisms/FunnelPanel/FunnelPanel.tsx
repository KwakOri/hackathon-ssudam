import PaginationBar from "@/components/atoms/PaginationBar";
import FunnelPanelTitle from "@/components/molecules/FunnelPanelTitle";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const funnelPanelVariants = cva("flex flex-col gap-4 p-4 ", {
  variants: {
    intent: {
      default: "border-line-normal border-b",
      counseling: "",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});
interface FunnelPanelProps extends VariantProps<typeof funnelPanelVariants> {
  title: string;
  currentStep: number;
  steps: number;
  className?: string;
}

const FunnelPanel = ({
  title,
  currentStep,
  steps,
  className,
  intent,
}: FunnelPanelProps) => {
  return (
    <div className={cn(funnelPanelVariants({ intent, className }))}>
      <FunnelPanelTitle title={title} currentStep={currentStep} steps={steps} />
      <PaginationBar currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default FunnelPanel;
