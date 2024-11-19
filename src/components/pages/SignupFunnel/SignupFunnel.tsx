"use client";

import Paragraph from "@/components/atoms/Paragraph";
import CheckInput from "@/components/molecules/CheckInput";
import Textfield from "@/components/molecules/Textfield";
import SignupFunnelStep from "@/components/templates/SignupFunnelStep";
import { useAddress } from "@/contexts/Address/address.context";
import api from "@/services/service";
import { ChangeEventHandler, useEffect, useState } from "react";

type StepTypes =
  | "email"
  | "password"
  | "nickname"
  | "address"
  | "age"
  | "principles"
  | "done";
interface UserInfoTypes {
  address: string;
  email: string;
  password: string;
  nickname: string;
  authCode: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isNicknameValid: boolean;
}

const passwordReg =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const SignupFunnel = () => {
  const [currentStep, setCurrentStep] = useState<StepTypes>("email");
  const [userInfo, setUserInfo] = useState<UserInfoTypes>({
    address: "",
    email: "",
    password: "",
    nickname: "",
    authCode: "",
    isEmailValid: false,
    isPasswordValid: false,
    isNicknameValid: false,
  });

  const address = useAddress();

  console.log(userInfo);
  const [TOS, setTOS] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const [isAuthenticationMailSent, setIsAuthenticationMailSent] =
    useState<boolean>(false);
  const [expireDate, setExpiredDate] = useState<number | null>(null);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  useEffect(() => {
    const isEmailValid = emailReg.test(userInfo.email);
    setUserInfo((prev) => ({ ...prev, isEmailValid }));
  }, [userInfo.email]);

  useEffect(() => {
    const isPasswordValid = passwordReg.test(userInfo.password);
    setUserInfo((prev) => ({ ...prev, isPasswordValid }));
  }, [userInfo.password]);

  return (
    <div className="w-full h-full">
      {currentStep === "email" && (
        <SignupFunnelStep
          title={"회원가입"}
          onClick={async () => {
            const isOk = await api.auth.verifyEmail({
              email: userInfo.email,
              verifyCode: userInfo.authCode,
            });
            console.log(isOk);
            if (isOk.status !== 200)
              return alert("인증번호가 일치하지 않습니다.");
            setCurrentStep("password");
          }}
        >
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
              buttonLabel={isAuthenticationMailSent ? "재전송" : "전송"}
              buttonOnClick={async () => {
                if (!userInfo.isEmailValid) return;
                setIsAuthenticationMailSent(true);
                setExpiredDate(Date.now() + 1000 * 60 * 3);
                const res = await api.auth.checkIsExistingEmail({
                  email: userInfo.email,
                });
                console.log(res);
              }}
              label="이메일"
              placeholder="이메일을 입력해주세요."
              validationOption="ValidationOption"
              value={userInfo.email}
              onChange={onEmailChange}
              isValid={userInfo.isEmailValid}
              errorMessage="이메일 형식이 올바르지 않습니다"
            />
            {isAuthenticationMailSent && (
              <div className="grow flex justify-between items-center p-3 rounded-[13px] border border-line-normal bg-fill-pale">
                <input
                  value={userInfo.authCode}
                  onChange={(e) => {
                    setUserInfo((prev) => ({
                      ...prev,
                      authCode: e.target.value,
                    }));
                  }}
                  placeholder={"인증번호를 입력해주세요"}
                  type="text"
                  className={
                    " text-label-strong placeholder-label-alternative bg-transparent outline-none"
                  }
                />
                <Paragraph>
                  {expireDate
                    ? `${Math.floor(
                        Math.floor((expireDate - Date.now()) / 1000) / 60
                      )}:${Math.floor((expireDate - Date.now()) / 1000) % 60}`
                    : ""}
                </Paragraph>
              </div>
            )}
          </div>
        </SignupFunnelStep>
      )}
      {currentStep === "password" && (
        <SignupFunnelStep
          title={"회원가입"}
          onClick={() => setCurrentStep("nickname")}
        >
          <div>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              비밀번호를
            </Paragraph>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              입력해주세요
            </Paragraph>
          </div>
          <Textfield
            isValid={userInfo.isPasswordValid}
            errorMessage="비밀번호 형식이 올바르지 않습니다"
            type="password"
            value={userInfo.password}
            onChange={(e) => {
              setUserInfo((prev) => ({ ...prev, password: e.target.value }));
            }}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            helperMessage="비밀번호는 영문 대소문자, 숫자, 특수문자를 혼합하여 8~20자 이내로 입력해주세요."
          />
        </SignupFunnelStep>
      )}
      {currentStep === "nickname" && (
        <SignupFunnelStep
          title={"회원가입"}
          onClick={() => setCurrentStep("address")}
        >
          <div>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              이름을
            </Paragraph>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              입력해주세요
            </Paragraph>
          </div>
          <Textfield
            buttonLabel="확인"
            buttonOnClick={async () => {
              try {
                const isOk = await api.auth.verifyNickname({
                  nickname: userInfo.nickname,
                });
                console.log(isOk);
              } catch (e: any) {
                if (e.status === 409) {
                  return alert("이미 사용중인 닉네임입니다.");
                }
                return alert("알 수 없는 오류입니다.");
              }
            }}
            label="이름"
            placeholder="이름을 입력해주세요."
            helperMessage="쓰담쓰담 내에서 사용할 이름을 자유롭게 입력해주세요."
            value={userInfo.nickname}
            onChange={(e) => {
              setUserInfo((prev) => ({ ...prev, nickname: e.target.value }));
              passwordReg.test("hello");
            }}
          />
        </SignupFunnelStep>
      )}

      {currentStep === "address" && (
        <SignupFunnelStep
          title={"회원가입"}
          onClick={() => setCurrentStep("principles")}
        >
          <div>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              주소를
            </Paragraph>
            <Paragraph fontSize={"title1"} fontWeight={"bold"}>
              입력해주세요
            </Paragraph>
          </div>
          <div
            onClick={async () => {
              const postCode = await address.open();
              if (!postCode) return;
              setUserInfo((prev) => ({ ...prev, address: postCode.address }));
            }}
          >
            <Textfield
              label="주소"
              placeholder="주소를 입력해주세요."
              helperMessage="주소를 입력해주세요"
              value={userInfo.address}
            />
          </div>
        </SignupFunnelStep>
      )}
      {currentStep === "principles" && (
        <SignupFunnelStep
          title={"회원가입"}
          onClick={async () => {
            try {
              const res = await api.auth.signUp({
                email: userInfo.email,
                password: userInfo.password,
                name: userInfo.nickname,
                address: userInfo.address,
                ageGroup: "20대",
              });
              console.log(res);
            } catch {}
          }}
        >
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
              "relative rounded-[18px] bg-fill-pale flex flex-col gap-8 p-4 inner-border-dark"
            }
          >
            <div>
              <CheckInput
                type={"radio"}
                onChange={(isChecked: boolean) => {
                  if (isChecked) {
                    setTOS({
                      one: true,
                      two: true,
                      three: true,
                      four: true,
                    });
                  } else {
                    setTOS({
                      one: false,
                      two: false,
                      three: false,
                      four: false,
                    });
                  }
                }}
                checked={
                  TOS["one"] && TOS["two"] && TOS["three"] && TOS["four"]
                }
                size={"md"}
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
                onChange={(isChecked: boolean) => {
                  setTOS((prev) => ({ ...prev, one: isChecked }));
                }}
                checked={TOS["one"]}
                size={"md"}
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
                onChange={(isChecked: boolean) => {
                  setTOS((prev) => ({ ...prev, two: isChecked }));
                }}
                checked={TOS["two"]}
                size={"md"}
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
                onChange={(isChecked: boolean) => {
                  setTOS((prev) => ({ ...prev, three: isChecked }));
                }}
                checked={TOS["three"]}
                size={"md"}
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
                onChange={(isChecked: boolean) => {
                  setTOS((prev) => ({ ...prev, four: isChecked }));
                }}
                checked={TOS["four"]}
                size={"md"}
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
        </SignupFunnelStep>
      )}
    </div>
  );
};

export default SignupFunnel;
