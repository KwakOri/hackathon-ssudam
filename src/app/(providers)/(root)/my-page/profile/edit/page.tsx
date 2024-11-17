"use client";

import Button from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import Page from "@/components/Layouts/Page";
import Header from "@/components/molecules/Header";
import Textfield from "@/components/molecules/Textfield";
import { useToast } from "@/contexts/Toast/Toast.context";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfileEditPage = () => {
  const toast = useToast();
  const navigate = useRouter();
  const [contents, setContents] = useState("");
  return (
    <Page className={"bg-fill-light flex flex-col"}>
      <Header intent={"labelWithBackIcon"}>프로필 수정</Header>
      <div className="grow p-4 flex flex-col gap-4 overflow-y-scroll">
        <article
          className={
            "bg-background-normal rounded-[18px] flex flex-col gap-4 p-4 relative inner-border-dark"
          }
        >
          <Paragraph
            fontSize={"body1"}
            fontWeight={"semibold"}
            className={"text-label-strong"}
          >
            가입정보
          </Paragraph>
          <Textfield
            label="이메일"
            placeholder="ssudam@ssudam.com"
            value={contents}
            onChange={(e) => setContents(e.currentTarget.value)}
          />
          <Textfield label="비밀번호" placeholder="**********" />
        </article>
        <article
          className={
            "bg-background-normal rounded-[18px] flex flex-col gap-4 p-4 relative inner-border-dark"
          }
        >
          <Paragraph
            fontSize={"body1"}
            fontWeight={"semibold"}
            className={"text-label-strong"}
          >
            개인정보
          </Paragraph>
          <Textfield label="연령대" caption="(선택)" placeholder="20대" />
          <Textfield label="지역" caption="(선택)" placeholder="부산" />
          <Textfield label="수면시간" caption="(선택)" placeholder="8시간" />
          <Textfield
            label="육아 피로도"
            caption="(선택)"
            placeholder="위험"
            disabled
          />
        </article>
        <Button
          onClick={() => {
            navigate.replace("/my-page/profile");
            toast.add({ intent: "accept", content: "저장이 완료되었습니다." });
          }}
        >
          저장하기
        </Button>
      </div>
    </Page>
  );
};

export default ProfileEditPage;
