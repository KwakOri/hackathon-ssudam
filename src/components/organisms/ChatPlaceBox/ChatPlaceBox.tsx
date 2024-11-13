import Paragraph from "@/components/atoms/Paragraph";
import LocationHolder from "@/components/molecules/LocationHolder";
import TextButton from "@/components/molecules/TextButton";
import Link from "next/link";

interface ChatPlaceBoxProps {
  category: string;
  title: string;
  location: string;
  href: string;
}

const ChatPlaceBox = ({
  category,
  title,
  location,
  href,
}: ChatPlaceBoxProps) => {
  return (
    <article
      className={
        "bg-background-normal neon-light rounded-[18px] flex flex-col gap-4 p-4 w-40"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <Paragraph fontSize={"caption1"} className={"text-label-neutral"}>
          {category}
        </Paragraph>
        <Paragraph fontSize={"body1"} className={"text-label-strong"}>
          {title}
        </Paragraph>
      </div>
      <LocationHolder>{location}</LocationHolder>
      <Link href={href} className={"self-end"}>
        <TextButton size="sm">자세히 보기</TextButton>
      </Link>
    </article>
  );
};

export default ChatPlaceBox;
