import Paragraph from "@/components/atoms/Paragraph";
import BannerInfo from "@/components/molecules/BannerInfo";
import BannerImageTypeA from "/public/images/envelope.svg";
const BannerInfoTypeA = () => {
  return (
    <article>
      <BannerInfo
        imgSrc={BannerImageTypeA}
        linkHref={""}
        linkLabel={"보러 가기"}
        bgColor={"primary"}
      >
        <div className="flex flex-col gap-1">
          <Paragraph
            fontSize={"caption1"}
            fontWeight={"semibold"}
            className={"text-label-normal"}
          >
            여성가족부 2024년
          </Paragraph>
          <div className="flex gap-1">
            <Paragraph
              fontSize={"label"}
              fontWeight={"semibold"}
              className={"text-accent-orange-strong"}
            >
              한부모가족
            </Paragraph>
            <Paragraph
              fontSize={"label"}
              fontWeight={"semibold"}
              className={"text-primary-heavy"}
            >
              복지서비스 종합안내서
            </Paragraph>
          </div>
        </div>
      </BannerInfo>
    </article>
  );
};

export default BannerInfoTypeA;
