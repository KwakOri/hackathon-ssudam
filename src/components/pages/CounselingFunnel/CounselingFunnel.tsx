"use client";

import Border from "@/components/atoms/Border";
import Paragraph from "@/components/atoms/Paragraph";
import ChatBox from "@/components/molecules/ChatBox";
import CheckInput from "@/components/molecules/CheckInput";
import Textfield from "@/components/molecules/Textfield";
import ChatFormalModeBox from "@/components/organisms/ChatModeBox/ChatFormalModeBox";
import ChatInformalModeBox from "@/components/organisms/ChatModeBox/ChatInformalModeBox";
import FunnelPanel from "@/components/organisms/FunnelPanel";
import CounselingFunnelStep from "@/components/templates/CounselingFunnelStep";
import { useState } from "react";

const CounselingFunnel = () => {
  const user = { nickname: "누구누구님" };
  const steps: number = 5;
  const [step, setStep] = useState<number>(0);
  const notices = [
    "안내를 읽고 동의해주세요",
    "대화 상대를 선택해주세요",
    "대화 상대를 선택해주세요",
    "호칭을 선택해주세요",
    "모드를 선택해주세요",
  ];
  const onNextPage = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <div className="w-full h-full flex flex-col bg-fill-light">
      <FunnelPanel
        currentStep={step}
        steps={steps}
        title={notices[step]}
        intent={"counseling"}
      />
      {step === 0 && (
        <CounselingFunnelStep onNext={() => onNextPage()}>
          <div className={"flex flex-col gap-4"}>
            <Paragraph
              fontSize={"label"}
              fontWeight={"semibold"}
              className="text-label-strong"
            >
              지역을 선택해주세요
            </Paragraph>

            <Paragraph
              fontSize={"body2"}
              fontWeight={"medium"}
              className="text-label-normal"
            >
              쓰담쓰담은 AI 심리상담 봇이며, 공인된 치료사가 아닙니다.
              쓰담쓰담이 제공하는 조언과 응답은 알고리즘을 기반으로 하며,
              전문적인 의학 또는 정신 건강 상담으로 간주되지 않습니다. 전문적인
              치료가 필요한 경우, 쓰담쓰담에서 제공하는 전문 정신건강의 또는
              전문 심리상담 인력에게 문의바랍니다.
            </Paragraph>
            <Paragraph
              fontSize={"body2"}
              fontWeight={"medium"}
              className="text-label-normal"
            >
              위기 상황에 처해 있거나 스스로 또는 타인에게 해를 가할 생각이 드는
              경우, 채팅에 “HELP”라고 보내 주시면 긴급전화로 연결됩니다.
            </Paragraph>
            <Paragraph
              fontSize={"body2"}
              fontWeight={"medium"}
              className="text-label-normal"
            >
              쓰담쓰담은 이용자의 행복한 내일을 위해 늘 노력하겠습니다.
            </Paragraph>
            <CheckInput
              size="md"
              type="checkbox"
              checked={true}
              onChange={(e) => console.log(e)}
            >
              <Paragraph
                fontSize={"caption1"}
                fontWeight={"medium"}
                className={"text-label-normal"}
              >
                확인했어요.
              </Paragraph>
            </CheckInput>
          </div>
        </CounselingFunnelStep>
      )}

      {step === 1 && (
        <CounselingFunnelStep onNext={() => onNextPage()}>
          <div className="flex flex-col gap-4 p-4 bg-background-normal rounded-[18px] relative">
            <Border className={"rounded-[18px]"} />
            <Paragraph
              fontSize={"heading2"}
              fontWeight={"semibold"}
              className={"text-primary-heavy"}
            >
              감히 판단하지 않겠습니다.
            </Paragraph>
            <Paragraph
              fontSize={"body2"}
              fontWeight={"medium"}
              className={"text-label-normal"}
            >
              쓰담쓰담은 모든 사람의 생각과 감정이 이해와 공감을 바탕으로 섣부른
              판단과 편견 없이 받아들여지는 안전한 공간입니다.
            </Paragraph>
            <Paragraph
              fontSize={"body2"}
              fontWeight={"medium"}
              className={"text-label-normal"}
            >
              쓰담쓰담은 모든 사람의 생각과 감정이 이해와 공감을 바탕으로 섣부른
              판단과 편견 없이 받아들여지는 안전한 공간입니다.
            </Paragraph>
          </div>
        </CounselingFunnelStep>
      )}

      {step === 2 && (
        <CounselingFunnelStep onNext={() => onNextPage()}>
          <div className="flex flex-col gap-4 p-4 bg-background-normal rounded-[18px] relative">
            <Border className={"rounded-[18px]"} />
            <Paragraph
              fontSize={"heading2"}
              fontWeight={"semibold"}
              className={"text-primary-heavy"}
            >
              당신을 위해 존재합니다.
            </Paragraph>
            <Paragraph
              fontSize={"body2"}
              fontWeight={"medium"}
              className={"text-label-normal"}
            >
              쓰담쓰담과 대화를 나눌수록 더욱 말이 잘 통하실 거예요. 쓰담쓰담은
              당신의 과거에 대해 질문하고, 개인 맞춤형 응답을 제공할 수 있어요.
            </Paragraph>
            <Paragraph
              fontSize={"body2"}
              fontWeight={"medium"}
              className={"text-label-normal"}
            >
              쓰담쓰담과 대화를 나눌수록 더욱 말이 잘 통하실 거예요. 쓰담쓰담은
              당신의 과거에 대해 질문하고, 개인 맞춤형 응답을 제공할 수 있어요.
            </Paragraph>
          </div>
        </CounselingFunnelStep>
      )}

      {step === 3 && (
        <CounselingFunnelStep onNext={() => onNextPage()}>
          <div className="flex flex-col gap-4 p-4 bg-background-normal rounded-[18px] relative">
            <Border className={"rounded-[18px]"} />
            <Paragraph
              fontSize={"heading2"}
              fontWeight={"semibold"}
              className={"text-primary-heavy"}
            >
              어떻게 불러드릴까요?
            </Paragraph>
            <Textfield
              label={"더욱 가깝고 친근하게 불러드릴게요."}
              placeholder={"호칭을 입력해주세요"}
              helperMessage={"불쾌..."}
            />
          </div>
        </CounselingFunnelStep>
      )}

      {step === 4 && (
        <CounselingFunnelStep onNext={() => onNextPage()}>
          <div className={"flex flex-col gap-8"}>
            <div>
              <ChatBox isMine={true}>많이 힘들었어요</ChatBox>
              <ChatBox isMine={false}>{user.nickname}! 오늘은 어땠어?</ChatBox>
              <ChatBox isMine={false}>무슨 고민 있으세요?</ChatBox>
            </div>
            <div className={"w-full flex gap-3"}>
              <ChatInformalModeBox />
              <ChatFormalModeBox />
            </div>
          </div>
        </CounselingFunnelStep>
      )}
    </div>
  );
};

export default CounselingFunnel;
