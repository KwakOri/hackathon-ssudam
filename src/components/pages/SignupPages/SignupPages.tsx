import Border from "@/components/atoms/Border";
import Paragraph from "@/components/atoms/Paragraph";
import CheckInput from "@/components/molecules/CheckInput";
import Textfield from "@/components/molecules/Textfield";
import SignupTemplate from "@/components/templates/SignupTemplate";
import { useState } from "react";
interface SignupPagesProps {}
interface AuthInfoTypes {
  email: string;
  code: string;
  isAuthenticated: boolean;
  password: string;
  nickname: string;
}

const SignupPages = ({}: SignupPagesProps) => {
  const [currentStep, setCurrentStep] = useState<string>("nickname");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [authInfo, setAuthInfo] = useState<AuthInfoTypes>({
    email: "",
    isAuthenticated: false,
    code: "",
    password: "",
    nickname: "",
  });

  console.log(authInfo);

  const sendAuthMail = async () => {
    const res = await fetch(
      "https://b6f2-220-88-76-114.ngrok-free.app/auth/auth-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ email: authInfo.email }),
      }
    );
    const message = await res.json();
    console.log(message);
    setIsAuth(true);
  };

  // const SignupSteps = {
  //   email: {},
  //   password: {},
  //   nickname: {},
  // };

  return (
    <div className="w-full h-full">
      {currentStep === "email" && (
        <SignupTemplate
          title={"회원가입"}
          onClick={async () => {
            const res = await fetch(
              `https://b6f2-220-88-76-114.ngrok-free.app/auth/verify-email?email=${authInfo.email}&verifyCode=${authInfo.code}`,
              {
                headers: {
                  "Access-Control-Allow-Credentials": "true",
                  "ngrok-skip-browser-warning": "true",
                },
              }
            );
            const data = await res.json();
            console.log(data);
            if (data.status !== 200) {
              alert("인증코드가 일치하지 않습니다.");
              return;
            }
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
              buttonLabel={isAuth ? "재발송" : "인증"}
              buttonOnClick={sendAuthMail}
              label="이메일"
              placeholder="이메일을 입력해주세요."
              validationOption="ValidationOption"
              value={authInfo.email}
              onChange={(e) => {
                setAuthInfo((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
            <div className="grow flex justify-between items-center p-3 rounded-[13px] border border-line-normal bg-fill-pale">
              <input
                value={authInfo.code}
                onChange={(e) => {
                  setAuthInfo((prev) => ({ ...prev, code: e.target.value }));
                }}
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
        <SignupTemplate
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
            buttonOnClick={() => {}}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            helperMessage="비밀번호는 영문 대소문자, 숫자, 특수문자를 혼합하여 8~20자 이내로 입력해주세요."
          />
        </SignupTemplate>
      )}
      {currentStep === "nickname" && (
        <SignupTemplate
          title={"회원가입"}
          onClick={async () => {
            if (authInfo.nickname === "") {
              alert("이름을 입력해주세요.");
              return;
            }
            const res = await fetch(
              `https://b6f2-220-88-76-114.ngrok-free.app/auth/verify-nickname?nickname=${authInfo.nickname}`,
              {
                headers: {
                  "Access-Control-Allow-Credentials": "true",
                  "ngrok-skip-browser-warning": "true",
                },
              }
            );
            const data = await res.json();
            console.log(data);

            // setCurrentStep("principles");
          }}
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
            buttonOnClick={() => {}}
            label="이름"
            placeholder="이름을 입력해주세요."
            helperMessage="쓰담쓰담 내에서 사용할 이름을 자유롭게 입력해주세요."
            value={authInfo.nickname}
            onChange={(e) => {
              setAuthInfo((prev) => ({ ...prev, nickname: e.target.value }));
            }}
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
    </div>
  );
};

export default SignupPages;
