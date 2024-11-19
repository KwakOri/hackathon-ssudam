import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";

interface SurveyTitleProps {
  title: string;
  description: string;
  currentStep: number;
  steps: number;
  isChecked: boolean;
}

const SurveyTitle = ({
  title,
  description,
  currentStep,
  steps,
  isChecked,
}: SurveyTitleProps) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <div className={"w-full flex justify-between items-center"}>
        <div className={"flex gap-2 items-center"}>
          <Paragraph
            fontSize={"body1"}
            fontWeight={"semibold"}
            className={"text-label-normal"}
          >
            {title}
          </Paragraph>
          <Paragraph
            fontSize={"caption1"}
            fontWeight={"medium"}
            className={"text-label-alternative"}
          >
            {currentStep}/{steps}
          </Paragraph>
        </div>

        <SVGIcon
          icon={"Success"}
          size={"md"}
          className={`fill-primary-normal ${
            isChecked ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className={"text-label-neutral"}
      >
        {description}
      </Paragraph>
    </div>
  );
};

export default SurveyTitle;
