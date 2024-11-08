import Paragraph from "@/components/atoms/Paragraph/Paragraph";
interface FunnelPanelTitle {
  title: string;
  steps: number;
  currentSteps: number;
}

const FunnelPanelTitle = ({ title, steps, currentSteps }: FunnelPanelTitle) => {
  return (
    <div className="w-full flex justify-between items-center">
      <Paragraph>{title}</Paragraph>
      <Paragraph
        fontSize={"label"}
        fontWeight={"medium"}
        className={"text-label-alternative"}
      >
        {currentSteps}/{steps}
      </Paragraph>
    </div>
  );
};

export default FunnelPanelTitle;
