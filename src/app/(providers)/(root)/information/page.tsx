"use client";
import Header from "@/components/molecules/Header";
import Page from "@/components/Layouts/Page/Page";
import FilterTitle from "@/components/molecules/FilterTitle";
import Chip from "@/components/atoms/Chip";
import Divider from "@/components/atoms/Divider";

import Section from "@/components/Layouts/Section/Section";
import Carousel from "@/components/organisms/Carousel";
import CardListBox from "@/components/organisms/CardListBox";

export default function InformationPage() {
  return (
    <Page className="flex flex-col gap-4">
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
          <Chip isIcon={true} isActive={false} />
          <Chip>지역</Chip>
          <Chip>대상</Chip>
          <Chip>유형</Chip>
          <Chip>기관</Chip>
        </div>
        <Divider intent={"horizontal"} />
      </Section>
      <Section className="flex flex-col gap-2 justify-center items-center mx-4">
        <CardListBox
          title="TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle"
          year="2024"
          month="05"
          day="10"
          isChecked={false}
          badges={[
            { content: "Label 1", intent: "gray" },
            { content: "Label 2", intent: "gray" },
          ]}
          content="여성가족부에서 새롭게 실시하는 청소년 미혼모 자립 지원 제도에 대한 설명입니다."
          from="여성가족부"
        />
      </Section>
    </Page>
  );
}
