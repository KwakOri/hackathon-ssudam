import Divider from "@/components/atoms/Divider";
import SidebarCategory from "@/components/molecules/SidebarCategory";
import SidebarSectionTitle from "@/components/molecules/SidebarSectionTitle";
import SidebarHeader from "@/components/organisms/SidebarHeader";
import { IconMapTypes } from "@/icons/icons";
import { useState } from "react";

const section01 = [
  { icon: "Home", label: "홈" },
  { icon: "Chat", label: "AI 심리상담" },
  { icon: "Map", label: "주변 시설 안내" },
  { icon: "Book", label: "지원 정보" },
];

const section02 = [
  { icon: "User", label: "프로필" },
  { icon: "StarLine", label: "스크랩" },
  { icon: "Setting", label: "설정" },
  { icon: "InIcon", label: "로그아웃" },
];

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-4 w-full h-full max-w-[240px] bg-static-white relative z-40">
      <SidebarHeader
        avatar={""}
        nickname={"잠자는곰"}
        profileMessage={"수면을 취해야해요"}
      />
      <article className="flex flex-col gap-2">
        <SidebarSectionTitle>메뉴</SidebarSectionTitle>
        <div className="flex flex-col">
          {section01.map(({ icon, label }) => (
            <SidebarCategory
              key={label}
              icon={icon as IconMapTypes}
              label={label}
              isActive={currentPage === label}
              onClick={() => setCurrentPage(label)}
            />
          ))}
        </div>
      </article>
      <div className="px-4">
        <Divider intent={"horizontal"} />
      </div>
      <article className="flex flex-col gap-2">
        <SidebarSectionTitle>내 정보</SidebarSectionTitle>
        <div className="flex flex-col">
          {section02.map(({ icon, label }) => (
            <SidebarCategory
              key={label}
              icon={icon as IconMapTypes}
              label={label}
              isActive={currentPage === label}
              onClick={() => setCurrentPage(label)}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
