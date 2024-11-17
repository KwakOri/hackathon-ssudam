import Paragraph from "@/components/atoms/Paragraph/Paragraph";
interface FunnelPanelTitle {
  title: string;
  steps: number;
  currentStep: number;
}

const FunnelPanelTitle = ({ title, steps, currentStep }: FunnelPanelTitle) => {
  return (
    <div className="w-full flex justify-between items-center">
      <Paragraph>{title}</Paragraph>
      <Paragraph
        fontSize={"label"}
        fontWeight={"medium"}
        className={"text-label-alternative"}
      >
        {currentStep}/{steps}
      </Paragraph>
    </div>
  );
};

export default FunnelPanelTitle;
