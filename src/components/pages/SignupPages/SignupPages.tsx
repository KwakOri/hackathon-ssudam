import Border from "@/components/atoms/Border";
import Paragraph from "@/components/atoms/Paragraph";
import CheckInput from "@/components/molecules/CheckInput";
import Textfield from "@/components/molecules/Textfield";
import SignupTemplate from "@/components/templates/SignupTemplate";
import { useState } from "react";

interface SignupPagesProps {
  currentStep: "email" | "password" | "nickname" | "principles";
}

const SignupPages = ({ currentStep }: SignupPagesProps) => {
  const [_, setCurrentStep] = useState<string>("email");
  // const SignupSteps = {
  //   email: {},
  //   password: {},
  //   nickname: {},
  // };

  return (
    <>
      {currentStep === "email" && (
        <SignupTemplate title={"회원가입"} onClick={() => setCurrentStep("")}>
          <div>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              이메일 인증이
            </Paragraph>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              필요합니다
            </Paragraph>
          </div>
          <div>
            <Textfield
              buttonLabel="인증"
              buttonOnClick={() => {}}
              label="이메일"
              placeholder="이메일을 입력해주세요."
              validationOption="ValidationOption"
            />
            <div className="grow flex justify-between items-center p-3 rounded-[13px] border border-line-normal bg-fill-pale">
              <input
                placeholder={"인증번호를 입력해주세요"}
                type="text"
                className={
                  " text-label-strong placeholder-label-alternative bg-transparent outline-none"
                }
              />
            </div>
          </div>
        </SignupTemplate>
      )}
      {currentStep === "password" && (
        <SignupTemplate title={"회원가입"} onClick={() => setCurrentStep("")}>
          <div>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              비밀번호를
            </Paragraph>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              입력해주세요
            </Paragraph>
          </div>
          <Textfield
            buttonOnClick={() => {}}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            helperMessage="비밀번호는 영문 대소문자, 숫자, 특수문자를 혼합하여 8~20자 이내로 입력해주세요."
          />
        </SignupTemplate>
      )}
      {currentStep === "nickname" && (
        <SignupTemplate title={"회원가입"} onClick={() => setCurrentStep("")}>
          <div>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              이름을
            </Paragraph>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              입력해주세요
            </Paragraph>
          </div>
          <Textfield
            buttonOnClick={() => {}}
            label="이름"
            placeholder="이름을 입력해주세요."
            helperMessage="쓰담쓰담 내에서 사용할 이름을 자유롭게 입력해주세요."
          />
        </SignupTemplate>
      )}
      {currentStep === "principles" && (
        <SignupTemplate title={"회원가입"} onClick={() => setCurrentStep("")}>
          <div>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              이용약관에
            </Paragraph>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              동의해주세요
            </Paragraph>
          </div>
          <article
            className={
              "relative rounded-[18px] bg-fill-pale flex flex-col gap-8 p-4"
            }
          >
            <Border intent={"dark"} className="rounded-[18px]" />
            <div>
              <CheckInput
                type={"radio"}
                onChange={() => {}}
                size={"md"}
                checked
              >
                <Paragraph
                  fontSize={"body1"}
                  fontWeight={"bold"}
                  className={"text-label-strong"}
                >
                  모두 동의
                </Paragraph>
              </CheckInput>
            </div>
            <div className={"flex flex-col gap-3"}>
              <CheckInput
                type={"radio"}
                onChange={() => {}}
                size={"md"}
                checked
              >
                <Paragraph
                  fontSize={"body2"}
                  fontWeight={"medium"}
                  className={
                    "text-label-normal underline decoration-label-normal"
                  }
                >
                  이용약관(필수)
                </Paragraph>
              </CheckInput>
              <CheckInput
                type={"radio"}
                onChange={() => {}}
                size={"md"}
                checked
              >
                <Paragraph
                  fontSize={"body2"}
                  fontWeight={"medium"}
                  className={
                    "text-label-normal underline decoration-label-normal"
                  }
                >
                  개인정보 수집・이용 동의(필수)
                </Paragraph>
              </CheckInput>
              <CheckInput
                type={"radio"}
                onChange={() => {}}
                size={"md"}
                checked
              >
                <Paragraph
                  fontSize={"body2"}
                  fontWeight={"medium"}
                  className={"text-label-normal"}
                >
                  연령・거주・위치 정보 수집・이용 동의(선택)
                </Paragraph>
              </CheckInput>
              <CheckInput
                type={"radio"}
                onChange={() => {}}
                size={"md"}
                checked
              >
                <Paragraph
                  fontSize={"body2"}
                  fontWeight={"medium"}
                  className={"text-label-normal"}
                >
                  복지 및 혜택 정보 수신(선택)
                </Paragraph>
              </CheckInput>
            </div>
          </article>
        </SignupTemplate>
      )}
    </>
  );
};

export default SignupPages;
