import Avatar from "@/components/atoms/Avatar";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";

interface UserProfileProps {
  avatar: string;
  nickname: string;
}

const UserProfile = ({ avatar, nickname }: UserProfileProps) => {
  return (
    <div className="flex gap-3 items-center">
      <Avatar avatar={avatar} shape={"circle"} size={"sm"} />{" "}
      {/* 후에 avatar를 props으로 받을 예정 */}
      <Paragraph>{nickname}</Paragraph>
    </div>
  );
};

export default UserProfile;
