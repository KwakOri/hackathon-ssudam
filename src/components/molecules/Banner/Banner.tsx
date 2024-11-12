import Paragraph from "@/components/atoms/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface BannerProps {
  imgSrc: string;
  linkHref: string;
  linkLabel: string;
}

const Banner = ({
  children,
  imgSrc,
  linkHref,
  linkLabel,
}: PropsWithChildren<BannerProps>) => {
  return (
    <Link href={linkHref}>
      <div></div>
      <div className="flex gap-1">
        <Paragraph>{linkLabel}</Paragraph>
        <SVGIcon icon={"ArrowRight"} />
      </div>
    </Link>
  );
};

export default Banner;
