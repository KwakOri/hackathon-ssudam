"use client";
import Button from "@/components/atoms/Button";
import Divider from "@/components/atoms/Divider";
import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import Page from "@/components/Layouts/Page/Page";
import Section from "@/components/Layouts/Section/Section";
import CardListTitle from "@/components/molecules/CardListTitle";
import DetailText from "@/components/molecules/DetailText";

export default function InformationPage() {
  return (
    <Page className="flex flex-col bg-gradient-to-b from-primary-heavy via-green-95 to-green-95 ">
      <div className=" flex px-4  justify-between items-center w-full h-[58px] shrink-0">
        <button>
          <SVGIcon icon={"ArrowLeft"} className="fill-static-white" />
        </button>
        <div className="flex gap-2">
          <button>
            <SVGIcon icon={"StarLine"} className="stroke-label-alternative" />
          </button>
          <button>
            <SVGIcon icon={"Share"} className="fill-static-white" />
          </button>
        </div>
      </div>
      {/* 헤더 끝 */}
      <div className=" flex-grow overflow-y-scroll pb-4 px-4 drop-shadow-[0_0_20px_rgba(105,175,165,0.1)] ">
        <Section className="flex p-5 rounded-[18px] bg-background-normal drop-shadow-[0_0_12px_rgba(105,175,165,0.3)]">
          <>
            <div className="flex justify-between items-center">
              <Paragraph
                fontSize={"caption1"}
                fontWeight={"medium"}
                className={"text-label-neutral"}
              >
                여성가족부
              </Paragraph>

              <Paragraph
                fontSize={"caption1"}
                fontWeight={"medium"}
                className={"text-label-neutral"}
              >
                24/6/10
              </Paragraph>
            </div>
            <div className="flex justify-between items-center">
              <Paragraph
                fontSize={"heading2"}
                fontWeight={"semibold"}
                className={
                  "text-label-strong overflow-hidden line-clamp-1 text-ellipsis"
                }
              >
                첫만남 이용권
              </Paragraph>
            </div>
            <Divider intent="horizontal" />
          </>
          {/* 컨텐츠 제목 */}
          <>
            <DetailText
              title="지원대상"
              content="출생아로서 출생신고 되어 정상적으로 주민등록번호를 부여받은 아동"
              warning="주민등록상 생년월일로부터 1년이 초과되지 않은 출생아"
            />
            <DetailText
              title="지원금액"
              content="출생아 1명당 200만원 바우처 지원"
              warning="국민행복카드"
            />
            <DetailText
              title="신청기간"
              content="생후 1년 이내"
              warning="아동의 출생일로부터 1년간 사용"
            />
            <DetailText
              title="사용처"
              content="유흥업소, 마사지 등 위생업종(이미용실 제외), 레저업종, 사행업종, 성인용품 등 기타업종 등을 제외한 전 업에서 사용 가능"
            />
            <DetailText
              title="신청방법"
              content="방문접수(보건소, 행정복지센터)"
              content2="온라인(복지로, 정부24)"
            />
            <DetailText
              title="문의"
              content="주소지 행정복지센터"
              content2="온라인(복지로, 정부24)"
            />
            <Divider intent="horizontal" />
          </>
          <>
            <Paragraph
              fontSize="label"
              fontWeight="medium"
              className="text-label-normal"
            >
              내용
            </Paragraph>
          </>
        </Section>
      </div>

      <div className="w-full px-4 pt-4 bg-background-normal border border-line-normal">
        <Button intent="greenFill" size="lg" className="w-full mb-4 ">
          사이트 방문하기
        </Button>
      </div>
    </Page>
  );
}
