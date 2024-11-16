"use client";
import Button from "@/components/atoms/Button";
import Page from "@/components/Layouts/Page/Page";
import Section from "@/components/Layouts/Section/Section";
import Header from "@/components/molecules/Header";
import SectionTitle from "@/components/molecules/SectionTitle";
import CardInfoBox from "@/components/organisms/CardInfoBox";
import ChatFormalModeBox from "@/components/organisms/ChatModeBox/ChatFormalModeBox";
import ChatInformalModeBox from "@/components/organisms/ChatModeBox/ChatInformalModeBox";
import api from "@/services/service";

export default function HomePage() {
  const getDate = async () => {
    const response = await api.auth.getUser();
    console.log(response);
    return response.data;
  };
  return (
    <Page className="flex flex-col gap-4">
      <Button onClick={getDate}>이거 눌러조</Button>
      <Header intent="main"></Header>
      <Section>
        <SectionTitle>AI 심리상담</SectionTitle>
        <div className={"w-full flex gap-3"}>
          <ChatInformalModeBox />
          <ChatFormalModeBox />
        </div>
      </Section>
      <Section>
        <SectionTitle>지원사업 정보</SectionTitle>
        <CardInfoBox
          badges={[
            { content: "육아", intent: "yellow_light" },
            { content: "임신", intent: "gray_light" },
            { content: "자립", intent: "primary" },
          ]}
          isChecked={false}
          isOption={false}
          options={[]}
          title="미혼부모 지원금"
        />
      </Section>
      <Section>Banner 삽입</Section>
      <Section>
        <CardInfoBox
          badges={[
            { content: "육아", intent: "yellow_light" },
            { content: "임신", intent: "gray_light" },
            { content: "자립", intent: "primary" },
          ]}
          isChecked={false}
          isOption={true}
          options={[
            { option: "지원대상", optionText: "20세 이하" },
            { option: "지원금액", optionText: "200만원" },
          ]}
          title="미혼부모 지원금"
        />
      </Section>
    </Page>
  );
}
