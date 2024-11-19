import Chip from "@/components/atoms/Chip";
import SurveyTitle from "@/components/molecules/Survey/SurveyTitle";

interface SurveyWithChipProps {
  surveyInfo: {
    title: string;
    description: string;
    options: string[];
  };
  currentStep: number;
  steps: number;
  isChecked: boolean;
  checkedOption: string;
  onOptionClick: (option: string) => void;
}

const SurveyWithChip = ({
  surveyInfo,
  currentStep,
  steps,
  isChecked,
  checkedOption: checkOption,
  onOptionClick,
}: SurveyWithChipProps) => {
  return (
    <div>
      <SurveyTitle
        currentStep={currentStep}
        description={surveyInfo.description}
        isChecked={isChecked}
        steps={steps}
        title={surveyInfo.title}
      />
      {surveyInfo.options.map((option) => (
        <Chip
          onClick={() => onOptionClick(option)}
          key={option}
          isActive={checkOption === option}
        >
          {option}
        </Chip>
      ))}
    </div>
  );
};

export default SurveyWithChip;
