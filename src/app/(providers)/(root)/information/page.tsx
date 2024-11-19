"use client";
import Chip from "@/components/atoms/Chip";
import Divider from "@/components/atoms/Divider";
import Page from "@/components/Layouts/Page/Page";
import FilterTitle from "@/components/molecules/FilterTitle";
import Header from "@/components/molecules/Header";

import Section from "@/components/Layouts/Section/Section";
import CardListBox from "@/components/organisms/CardListBox";
import Carousel from "@/components/organisms/Carousel";

const cardData = [
  {
    title: "Title 1",
    isChecked: false,
    badges: [
      { content: "Label 1", intent: "gray_light" },
      { content: "Label 2", intent: "gray_light" },
    ],
    content:
      "여성가족부에서 새롭게 실시하는 청소년 미혼모 자립 지원 제도에 대한 설명입니다.",
    from: "여성가족부",
  },
  {
    title: "Title 2",
    isChecked: false,
    badges: [
      { content: "Label 1", intent: "gray_light" },
      { content: "Label 2", intent: "gray_light" },
    ],
    content:
      "여성가족부에서 새롭게 실시하는 청소년 미혼모 자립 지원 제도에 대한 설명입니다.",
    from: "여성가족부",
  },
];
interface BadgeInfo {
  content: React.ReactNode;
  intent:
    | "primary"
    | "primary_light"
    | "purple"
    | "purple_light"
    | "brown"
    | "brown_light"
    | "yellow"
    | "yellow_light"
    | "red"
    | "red_light"
    | "green"
    | "green_light"
    | "blue"
    | "blue_light"
    | "gray"
    | "gray_light";
} //추후 mck데이터에 넣을 예정

export default function InformationPage() {
  return (
    <Page className="flex flex-col gap-4 overflow-y-scroll">
      <Header intent="main" />
      <Section>
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
        <FilterTitle
          title="지원정보"
          select={[
            { value: "최신순", label: "최신순" },
            { value: "오래된순", label: "오래된순" },
            { value: "인기순", label: "인기순" },
            { value: "스크랩순", label: "스크랩순" },
          ]}
        />
        <div className="flex gap-[6px] mx-4">
          <Chip isIcon={true} isChecked={false} />
          <Chip>지역</Chip>
          <Chip>대상</Chip>
          <Chip>유형</Chip>
          <Chip>기관</Chip>
        </div>
        <Divider intent={"horizontal"} />
      </Section>
      <Section className="flex flex-col justify-center items-center mx-4 ">
        {cardData.map((card, index) => (
          <div key={index}>
            <CardListBox
              title={card.title}
              isChecked={card.isChecked}
              badges={card.badges as BadgeInfo[]}
              content={card.content}
              from={card.from}
            />
            <div className="mt-2">
              <Divider intent={"horizontal"} />
            </div>
          </div>
        ))}
      </Section>
    </Page>
  );
}
