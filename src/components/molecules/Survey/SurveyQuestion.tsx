"use client";

import Chip from "@/components/atoms/Chip";
import Paragraph from "@/components/atoms/Paragraph";
import CheckInput from "@/components/molecules/CheckInput";
import SurveyTitle from "@/components/molecules/Survey/SurveyTitle";

interface SurveyQuestionProps {
  surveyInfo: {
    title: string;
    description: string;
    options: string[];
    surveyType: "radio" | "chip";
  };
  currentStep: number;
  steps: number;
  isChecked: boolean;
  checkedOption: string;
  onOptionClick: (option: string) => void;
}

const SurveyQuestion = ({
  surveyInfo,
  currentStep,
  steps,
  isChecked,
  checkedOption: checkOption,
  onOptionClick,
}: SurveyQuestionProps) => {
  return (
    <div className={"flex flex-col gap-5"}>
      <SurveyTitle
        currentStep={currentStep}
        description={surveyInfo.description}
        isChecked={isChecked}
        steps={steps}
        title={surveyInfo.title}
      />
      {surveyInfo.surveyType === "chip" && (
        <div className={"flex gap gap-2 flex-wrap"}>
          {surveyInfo.options.map((option) => (
            <Chip
              className={"px-[11px]"}
              onClick={() => onOptionClick(option)}
              key={option}
              isActive={checkOption === option}
            >
              {option}
            </Chip>
          ))}
        </div>
      )}
      {surveyInfo.surveyType === "radio" && (
        <div className={"flex flex-col gap-2"}>
          {surveyInfo.options.map((option) => (
            <CheckInput
              onChange={() => onOptionClick(option)}
              key={option}
              checked={checkOption === option}
              size="md"
              type="radio"
            >
              <Paragraph
                fontSize={"label"}
                fontWeight={"medium"}
                className={"text-label-normal"}
              >
                {option}
              </Paragraph>
            </CheckInput>
          ))}
        </div>
      )}
    </div>
  );
};

export default SurveyQuestion;
