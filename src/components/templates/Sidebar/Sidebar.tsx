"use client";

import Divider from "@/components/atoms/Divider";
import SidebarCategory from "@/components/molecules/SidebarCategory";
import SidebarSectionTitle from "@/components/molecules/SidebarSectionTitle";
import SidebarHeader from "@/components/organisms/SidebarHeader";
import { useSidebar } from "@/contexts/Sidebar/Sidebar.context";
import { IconMapTypes } from "@/icons/icons";
import { usePathname, useRouter } from "next/navigation";

const section01 = [
  { icon: "Home", label: "홈", pathname: "/" },
  { icon: "Chat", label: "AI 심리상담", pathname: "/counseling" },
  { icon: "Map", label: "주변 시설 안내", pathname: "/map" },
  { icon: "Book", label: "지원 정보", pathname: "/information" },
];

const section02 = [
  { icon: "User", label: "프로필", pathname: "/my-page/profile" },
  { icon: "StarLine", label: "스크랩", pathname: "/my-page/clipping" },
  { icon: "Setting", label: "설정", pathname: "/my-page/setting" },
  { icon: "InIcon", label: "로그아웃", pathname: "/logout" },
];

const Sidebar = () => {
  const currentPathname = usePathname();
  const navigate = useRouter();
  const sidebar = useSidebar();

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
          {section01.map(({ icon, label, pathname }) => (
            <SidebarCategory
              key={label}
              icon={icon as IconMapTypes}
              label={label}
              isActive={currentPathname === pathname}
              onClick={() => {
                navigate.push(pathname);
                sidebar.close();
              }}
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
          {section02.map(({ icon, label, pathname }) => {
            console.log(currentPathname, pathname);
            return (
              <SidebarCategory
                key={label}
                icon={icon as IconMapTypes}
                label={label}
                isActive={currentPathname === pathname}
                onClick={() => {
                  sidebar.close();
                  navigate.push(pathname);
                }}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
