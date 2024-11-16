import PaginationBar from "@/components/atoms/PaginationBar";
import FunnelPanelTitle from "@/components/molecules/AuthFunnelPanelTitle";

interface AuthFunnelPanelProps {
  title: string;
  currentStep: number;
  steps: number;
}

const AuthFunnelPanel = ({
  title,
  currentStep,
  steps,
}: AuthFunnelPanelProps) => {
  return (
    <div className={"flex flex-col gap-4 p-4 border-line-normal border-b"}>
      <FunnelPanelTitle title={title} currentStep={currentStep} steps={steps} />
      <PaginationBar currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default AuthFunnelPanel;
