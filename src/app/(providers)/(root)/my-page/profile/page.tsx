import Avatar from "@/components/atoms/Avatar";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Divider from "@/components/atoms/Divider";
import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import Page from "@/components/Layouts/Page";
import Header from "@/components/molecules/Header";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <Page className={"bg-fill-light"}>
      <Header title="프로필" intent="main" />
      <section className="flex flex-col gap-5 px-4 pt-4 pb-8 bg-background-normal mb-5">
        <Paragraph
          fontSize={"body1"}
          fontWeight={"semibold"}
          className={"text-label-strong"}
        >
          가입정보
        </Paragraph>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Avatar avatar="" shape={"circle"} size={"md"} />
            <div className="flex flex-col justify-center gap-1">
              <Paragraph
                fontSize={"body1"}
                fontWeight={"semibold"}
                className={"text-label-strong"}
              >
                전정현
              </Paragraph>
              <Paragraph
                fontSize={"body2"}
                fontWeight={"medium"}
                className={"text-label-neutral"}
              >
                yardvvorker@gmail.com
              </Paragraph>
            </div>
          </div>
          <Button intent={"light"} size={"sm"}>
            수정
          </Button>
        </div>
      </section>
      <section
        className={"flex flex-col gap-5 px-4 pt-8 pb-8 bg-background-normal"}
      >
        <Paragraph
          fontSize={"body1"}
          fontWeight={"semibold"}
          className={"text-label-strong"}
        >
          개인정보
        </Paragraph>
        <div className="flex flex-col gap-4">
          <div className={"flex justify-between items-center"}>
            <Paragraph
              fontSize={"body1"}
              fontWeight={"semibold"}
              className={"text-label-normal"}
            >
              연령대
            </Paragraph>
            <Link href="">
              <div className="flex gap-2 items-center">
                <Paragraph
                  fontSize={"label"}
                  fontWeight={"medium"}
                  className={"text-label-strong"}
                >
                  20대
                </Paragraph>
                <SVGIcon icon={"ChevronRight"} />
              </div>
            </Link>
          </div>
          <Divider intent={"horizontal"} />
          <div className={"flex justify-between items-center"}>
            <Paragraph
              fontSize={"body1"}
              fontWeight={"semibold"}
              className={"text-label-normal"}
            >
              지역
            </Paragraph>
            <Link href="">
              <div className="flex gap-2 items-center">
                <Paragraph
                  fontSize={"label"}
                  fontWeight={"medium"}
                  className={"text-label-strong"}
                >
                  부산
                </Paragraph>
                <SVGIcon icon={"ChevronRight"} />
              </div>
            </Link>
          </div>
          <Divider intent={"horizontal"} />
          <div className={"flex justify-between items-center"}>
            <div className={"flex gap-2 items-center"}>
              <Paragraph
                fontSize={"body1"}
                fontWeight={"semibold"}
                className={"text-label-normal"}
              >
                수면시간
              </Paragraph>
              <Badge intent={"red_light"}>
                <Paragraph
                  fontSize={"caption2"}
                  fontWeight={"semibold"}
                  className="text-accent-red-strong"
                >
                  위험
                </Paragraph>
              </Badge>
            </div>
            <Link href="">
              <div className="flex gap-2 items-center">
                <Paragraph
                  fontSize={"label"}
                  fontWeight={"medium"}
                  className={"text-accent-red-normal"}
                >
                  하루 4시간
                </Paragraph>
                <SVGIcon icon={"ChevronRight"} />
              </div>
            </Link>
          </div>
          <Divider intent={"horizontal"} />
          <div className={"flex justify-between items-center"}>
            <div className={"flex gap-2 items-center"}>
              <Paragraph
                fontSize={"body1"}
                fontWeight={"semibold"}
                className={"text-label-normal"}
              >
                육아 피로도
              </Paragraph>
              <Badge intent={"red_light"}>
                <Paragraph
                  fontSize={"caption2"}
                  fontWeight={"semibold"}
                  className="text-accent-red-strong"
                >
                  위험
                </Paragraph>
              </Badge>
            </div>
            <Link href="">
              <div className="flex gap-2 items-center">
                <Paragraph
                  fontSize={"label"}
                  fontWeight={"medium"}
                  className={"text-accent-red-normal"}
                >
                  매우 높음
                </Paragraph>
                <SVGIcon icon={"ChevronRight"} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default ProfilePage;
