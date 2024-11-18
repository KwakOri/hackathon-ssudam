import Button from "@/components/atoms/Button";
import Page from "@/components/Layouts/Page/Page";
import Header from "@/components/molecules/Header";
import MainFilter from "@/components/molecules/MainFilter";

export default function FilterPage() {
  return (
    <Page className="flex flex-col ">
      <Header intent="labelWithResetIcon" title="필터" />
      <div className="flex-grow flex flex-col gap-2 px-4">
        <MainFilter
          title="지역을 선택해주세요"
          max={5}
          select={[
            { value: "전국", label: "전국" },
            { value: "서울", label: "서울" },
            { value: "경기", label: "경기" },
            { value: "인천", label: "인천" },
            { value: "부산", label: "부산" },
            { value: "대구", label: "대구" },
            { value: "광주", label: "광주" },
            { value: "대전", label: "대전" },
            { value: "울산", label: "울산" },
            { value: "세종", label: "세종" },
            { value: "강원", label: "강원" },
            { value: "충북", label: "충북" },
            { value: "충남", label: "충남" },
            { value: "경북", label: "경북" },
            { value: "경남", label: "경남" },
            { value: "전남", label: "전남" },
            { value: "전북", label: "전북" },
            { value: "제주", label: "제주" },
          ]}
        />
        <MainFilter
          title="대상을 선택해주세요"
          max={3}
          select={[
            { value: "전체", label: "전체" },
            { value: "임산부", label: "임산부" },
            { value: "미혼모・부", label: "미혼모・부" },
            { value: "한부모", label: "한부모" },
            { value: "아동", label: "아동" },
            { value: "청소년", label: "청소년" },
          ]}
        />
        <MainFilter
          title="유형을 선택해주세요"
          max={3}
          select={[
            { value: "전체", label: "전체" },
            { value: "임신・출산", label: "임신・출산" },
            { value: "양육・생계", label: "양육・생계" },
            { value: "시설・주거", label: "시설・주거" },
            { value: "교육・취업", label: "교육・취업" },
            { value: "금융・법률", label: "금융・법률" },
            { value: "정신건강", label: "정신건강" },
            { value: "기타", label: "기타" },
          ]}
        />
        <MainFilter
          title="기관을 선택해주세요"
          max={3}
          select={[
            { value: "전체", label: "전체" },
            { value: "임신・출산", label: "임신・출산" },
            { value: "양육・생계", label: "양육・생계" },
            { value: "시설・주거", label: "시설・주거" },
            { value: "교육・취업", label: "교육・취업" },
            { value: "금융・법률", label: "금융・법률" },
            { value: "정신건강", label: "정신건강" },
            { value: "기타", label: "기타" },
          ]}
        />
      </div>
      <div className="mx-4">
        <Button intent="greenFill" size="lg" className="w-full mb-4 ">
          적용하기
        </Button>
      </div>
    </Page>
  );
}
