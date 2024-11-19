"use client";

import Divider from "@/components/atoms/Divider";
import Page from "@/components/Layouts/Page";
import Header from "@/components/molecules/Header";
import SurveyQuestion from "@/components/molecules/Survey/SurveyQuestion";
import { useState } from "react";

interface questionListTypes {
  number: "one" | "two" | "three" | "four" | "five" | "six" | "seven";
  title: string;
  description: string;
  options: string[];
  surveyType: "chip" | "radio";
}

const questionList: questionListTypes[] = [
  {
    number: "one",
    title: "1. 하루에 얼마나 주무시나요?",
    description: "최근 일주일 내 평균적인 수면 시간을 알려주세요.",
    options: ["3시간 미만", "3-4시간", "5-6시간", "7시간 이상"],
    surveyType: "chip",
  },
  {
    number: "two",
    title: "2. 일주일에 몇 번 운동하시나요?",
    description: "숨이 찰 만큼 격한 운동을 기준으로 선택해주세요.",
    options: [
      "운동하지 않아요.",
      "주 1회 운동해요.",
      "주 2-3회 운동해요.",
      "주 4회 이상 운동해요.",
    ],
    surveyType: "radio",
  },
  {
    number: "three",
    title: "3. 매일 얼마나 피로하신가요?",
    description: "육아로 인해 느끼는 피로도의 정도를 알려주세요.",
    options: [
      "많이 피곤해요. (5점)",
      "힘들어요. (4점)",
      "보통이에요. (3점)",
      "괜찮아요. (2점)",
      "전혀 피곤하지 않아요. (1점)",
    ],
    surveyType: "radio",
  },
  {
    number: "four",
    title: "4. 자괴감이 든 적이 있으신가요?",
    description: "육아 시 자신감이 결여된다고 느꼈던 경험이 있나요?",
    options: ["네", "아니요"],
    surveyType: "chip",
  },
  {
    number: "five",
    title: "5. 부정적인 감정에 대해 알려주세요.",
    description:
      "육아 시 분노, 답답함, 섭섭함, 걱정 등 부정적인 정서를 느꼈던 경험이 있나요?",
    options: ["네", "아니요"],
    surveyType: "chip",
  },
  {
    number: "six",
    title: "6. 부정적인 행동에 대해 알려주세요.",
    description:
      "육아 시 자녀에게 소리를 지르거나, 겁을 주는 등 부정적인 행동을 한 경험이 있나요?",
    options: ["네", "아니요"],
    surveyType: "chip",
  },
  {
    number: "seven",
    title: "7. 자녀의 특성에 대해 알려주세요.",
    description:
      "자녀가 의존적이고, 잘 울고, 예민하고, 짜증이 많은 성향인가요?",
    options: ["네", "아니요"],
    surveyType: "chip",
  },
];

const SurveyPage = () => {
  const [surveys, setSurveys] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
  });
  const totalSteps = 7;
  // const [currentStep, setCurrentStep] = useState(0);
  console.log(surveys);
  return (
    <Page>
      <Header title={"자가 진단 테스트"} intent="labelWithResetIcon" />
      <div className={"grow overflow-y-scroll flex flex-col gap-5 p-4"}>
        {questionList.map((surveyInfo, i) => {
          return (
            <>
              {i !== 0 && <Divider intent={"horizontal"} />}
              <SurveyQuestion
                key={surveyInfo.title}
                surveyInfo={surveyInfo}
                checkedOption={surveys[surveyInfo.number]}
                currentStep={i + 1}
                isChecked={surveys[surveyInfo.number] !== ""}
                onOptionClick={(option: string) =>
                  setSurveys((prev) => ({
                    ...prev,
                    [surveyInfo.number]: option,
                  }))
                }
                steps={totalSteps}
              />
            </>
          );
        })}
      </div>
    </Page>
  );
};

export default SurveyPage;
