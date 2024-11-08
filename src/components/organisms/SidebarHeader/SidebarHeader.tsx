import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import UserProfile from "@/components/molecules/UserProfile";

interface SidebarHeaderProps {
  avatar: string;
  nickname: string;
  profileMessage: string;
}

const SidebarHeader = ({
  avatar,
  nickname,
  profileMessage,
}: SidebarHeaderProps) => {
  return (
    <article className="flex flex-col gap-3 py-3 px-4 w-full">
      <div className={"flex items-center justify-between"}>
        <UserProfile avatar={avatar} nickname={nickname} />
        <SVGIcon icon={"InIcon"} size={"sm"} />
      </div>
      <Paragraph
        fontSize={"caption1"}
        fontWeight={"medium"}
        className={"text-label-neutral"}
      >
        {profileMessage}
      </Paragraph>
    </article>
  );
};

export default SidebarHeader;
