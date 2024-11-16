import Paragraph from "@/components/atoms/Paragraph/Paragraph";
interface AuthFunnelPanelTitle {
  title: string;
  steps: number;
  currentStep: number;
}

const AuthFunnelPanelTitle = ({
  title,
  steps,
  currentStep,
}: AuthFunnelPanelTitle) => {
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

export default AuthFunnelPanelTitle;
