"use client";

import SurveyWithChip from "@/components/molecules/Survey/SurveyWithChip";
import { useState } from "react";

const questionList = {
  1: {
    title: "1. 무슨 일이 있어요?",
    description: "무슨 일이 있었나요?",
    options: ["가족관계", "직장", "학교", "친구", "연애", "건강"],
  },
};

const SurveyPage = () => {
  const [surveys, setSurveys] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });
  const totalSteps = 7;
  const [currentStep, setCurrentStep] = useState(0);
  console.log(surveys);
  return (
    <div>
      <SurveyWithChip
        surveyInfo={questionList[1]}
        checkedOption={surveys[1]}
        currentStep={1}
        isChecked={surveys[1] !== ""}
        onOptionClick={(option: string) =>
          setSurveys((prev) => ({ ...prev, 1: option }))
        }
        steps={totalSteps}
      />
    </div>
  );
};

export default SurveyPage;
