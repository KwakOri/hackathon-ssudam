"use client";

import MockPage from "/public/images/mock/mock_main.png";

import Page from "@/components/Layouts/Page";
import Header from "@/components/molecules/Header";
import Image from "next/image";

// import Page from "@/components/Layouts/Page/Page";
// import Section from "@/components/Layouts/Section/Section";
// import Header from "@/components/molecules/Header";
// import SectionTitle from "@/components/molecules/SectionTitle";
// import Carousel from "@/components/organisms/Carousel";
// import ChatFormalModeBox from "@/components/organisms/ChatModeBox/ChatFormalModeBox";
// import ChatInformalModeBox from "@/components/organisms/ChatModeBox/ChatInformalModeBox";

export default function HomePage() {
  return (
    <Page>
      <Header intent="main"></Header>
      <div className={"relative w-full grow overflow-y-scroll"}>
        <Image src={MockPage} alt="mock" />
      </div>

      {/* <div className="grow flex flex-col gap-4 overflow-y-scroll py-4">
        <Section>
          <SectionTitle>AI 심리상담</SectionTitle>
          <div className={"w-full flex gap-3 px-4"}>
            <ChatInformalModeBox />
            <ChatFormalModeBox />
          </div>
        </Section>
        <Section>
          <SectionTitle>지원사업 정보</SectionTitle>
          <Carousel
            carouselItems={[
              {
                type: "card",
                title: "미혼부모 지원금",
                badges: [
                  { content: "육아", intent: "yellow_light" },
                  { content: "임신", intent: "gray_light" },
                  { content: "자립", intent: "primary" },
                ],
              },
              {
                type: "card",
                title: "미혼부모 지원금",
                badges: [
                  { content: "육아", intent: "yellow_light" },
                  { content: "임신", intent: "gray_light" },
                  { content: "자립", intent: "primary" },
                ],
              },
              {
                type: "card",
                title: "미혼부모 지원금",
                badges: [
                  { content: "육아", intent: "yellow_light" },
                  { content: "임신", intent: "gray_light" },
                  { content: "자립", intent: "primary" },
                ],
              },
              {
                type: "card",
                title: "미혼부모 지원금",
                badges: [
                  { content: "육아", intent: "yellow_light" },
                  { content: "임신", intent: "gray_light" },
                  { content: "자립", intent: "primary" },
                ],
              },
            ]}
          />
        </Section>
        <Carousel
          carouselItems={[
            {
              type: "image",
              src: "/images/Property1.png",
              alt: "Image 1",
            },
            {
              type: "image",
              src: "/images/Property2.png",
              alt: "Image 2",
            },
            {
              type: "image",
              src: "/images/Property3.png",
              alt: "Image 3",
            },
          ]}
        />
        <Section>
          <SectionTitle>지원사업 정보 요약</SectionTitle>
          <Carousel
            carouselItems={[
              {
                type: "card_option",
                title: "미혼부모 지원금",
                badges: [
                  { content: "육아", intent: "yellow_light" },
                  { content: "임신", intent: "gray_light" },
                  { content: "자립", intent: "primary" },
                ],
                options: [
                  { option: "지원대상", optionText: "20세 이하" },
                  { option: "지원금액", optionText: "200만원" },
                ],
              },
              {
                type: "card_option",
                title: "미혼부모 지원금",
                badges: [
                  { content: "육아", intent: "yellow_light" },
                  { content: "임신", intent: "gray_light" },
                  { content: "자립", intent: "primary" },
                ],
                options: [
                  { option: "지원대상", optionText: "20세 이하" },
                  { option: "지원금액", optionText: "200만원" },
                ],
              },
              {
                type: "card_option",
                title: "미혼부모 지원금",
                badges: [
                  { content: "육아", intent: "yellow_light" },
                  { content: "임신", intent: "gray_light" },
                  { content: "자립", intent: "primary" },
                ],
                options: [
                  { option: "지원대상", optionText: "20세 이하" },
                  { option: "지원금액", optionText: "200만원" },
                ],
              },
            ]}
          />
        </Section>
      </div> */}
    </Page>
  );
}
