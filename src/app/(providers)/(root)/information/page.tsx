"use client";
import Chip from "@/components/atoms/Chip";
import Divider from "@/components/atoms/Divider";
import Page from "@/components/Layouts/Page/Page";
import FilterTitle from "@/components/molecules/FilterTitle";
import Header from "@/components/molecules/Header";
import { useState } from "react";

import Loading from "@/components/atoms/Loading/Loading";
import Section from "@/components/Layouts/Section/Section";
import CardListBox from "@/components/organisms/CardListBox";
import Carousel from "@/components/organisms/Carousel";
import api from "@/services/service";
import { sortByTypes, SupportProgram } from "@/types/information/types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
  const navigate = useRouter();
  const [isFilter, setIsFilter] = useState(false);
  const [sortBy, setSortBy] = useState<sortByTypes>("desc");
  console.log(sortBy);
  const { data, isPending } = useQuery({
    queryKey: ["support", sortBy],
    queryFn: () => api.information.getAllSupportSortBy(sortBy),
    select: (data) => {
      return data.result.map((item: SupportProgram) => {
        return {
          id: item.id,
          type: "card",
          title: item.title,
          badges: [
            { content: "육아", intent: "yellow_light" },
            { content: "임신", intent: "gray_light" },
            { content: "자립", intent: "primary" },
          ],
        };
      });
    },
  });
  if (isPending) return <Loading />;
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
          selectedValue={sortBy}
          setSelectedValue={(value: sortByTypes) => setSortBy(value)}
          title="지원정보"
          select={[
            { value: "desc", label: "최신순" },
            { value: "asc", label: "오래된순" },
            { value: "viewCount", label: "인기순" },
            { value: "scrapCount", label: "스크랩순" },
          ]}
        />
        <div className="flex gap-[6px] mx-4">
          <Chip
            isIcon={true}
            isActive={isFilter}
            onClick={() => setIsFilter(!isFilter)}
          />
          <Chip>지역</Chip>
          <Chip>대상</Chip>
          <Chip>유형</Chip>
          <Chip>기관</Chip>
        </div>
        <Divider intent={"horizontal"} />
      </Section>
      <Section className="flex flex-col justify-center items-center mx-4 ">
        {data.map((card: SupportProgram) => (
          <div
            key={card.id}
            onClick={() => navigate.push(`/information/${card.id}`)}
          >
            <CardListBox
              title={card.title}
              isChecked={false}
              badges={
                [
                  { content: "Label 1", intent: "gray_light" },
                  { content: "Label 2", intent: "gray_light" },
                ] as BadgeInfo[]
              }
              content={card?.supportContent ?? ""}
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
