import Divider from "@/components/atoms/Divider";
import SidebarSectionTitle from "@/components/atoms/SidebarSectionTitle";
import SidebarCategory from "@/components/molecules/SidebarCategory";
import SidebarHeader from "@/components/organisms/SidebarHeader";

const Sidebar = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <SidebarHeader
        avatar={""}
        nickname={"잠자는곰"}
        profileMessage={"수면을 취해야해요"}
      />
      <article className="flex flex-col gap-2">
        <SidebarSectionTitle>메뉴</SidebarSectionTitle>
        <div className="flex flex-col">
          <SidebarCategory icon={"Home"} label={"홈"} />
          <SidebarCategory icon={"Chat"} label={"AI 심리상담"} />
          <SidebarCategory icon={"Map"} label={"주변 시설 안내"} />
          <SidebarCategory icon={"Book"} label={"지원 정보"} />
        </div>
      </article>
      <div className="px-4">
        <Divider intent={"horizontal"} />
      </div>
      <article className="flex flex-col gap-2">
        <SidebarSectionTitle>내 정보</SidebarSectionTitle>
        <div className="flex flex-col">
          <SidebarCategory icon={"User"} label={"프로필"} />
          <SidebarCategory icon={"StarActiveFalse"} label={"스크랩"} />
          <SidebarCategory icon={"Setting"} label={"설정"} />
          <SidebarCategory icon={"InIcon"} label={"로그아웃"} />
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
