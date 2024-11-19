"use client";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import Header from "@/components/molecules/Header";
import Textfield from "@/components/molecules/Textfield";
import api from "@/services/service";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface inputsTypes {
  email: string;
  password: string;
}

const SignInPage = () => {
  const navigate = useRouter();
  const [inputs, setInputs] = useState<inputsTypes>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.auth.signIn({
        email: inputs.email,
        password: inputs.password,
      });
      console.log(response);
      localStorage.setItem("ACCESS_TOKEN", response.data.accessToken);
      localStorage.setItem("REFRESH_TOKEN", response.data.refreshToken);

      if (response.status !== 200) return;
      navigate.replace("/");
    } catch (e: any) {}
  };
  return (
    <section className="w-full">
      <Header intent="labelWithCloseIcon" title={"로그인"} />
      <div className={"flex flex-col gap-10 p-4"}>
        <div className={"w-full flex justify-center items-center"}>
          <Avatar shape={"square"} size={"xl"} avatar="" />
        </div>
        <form className={"flex flex-col gap-6 p-4"} onSubmit={onSubmit}>
          <Textfield
            value={inputs.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputs((prev) => ({ ...prev, email: e.target.value }));
            }}
            type="email"
            label="이메일"
            placeholder="이메일을 입력해주세요."
          />
          <Textfield
            value={inputs.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputs((prev) => ({ ...prev, password: e.target.value }));
            }}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
          />
          <Button className={"w-full"} type="submit">
            로그인
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
