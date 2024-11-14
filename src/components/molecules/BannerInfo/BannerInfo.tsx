import Paragraph from "@/components/atoms/Paragraph";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import ArrowRight from "/public/svgs/arrow_right.svg";

const BannerVariants = cva("w-[343px] p-4 rounded-[18px]", {
  variants: {
    bgColor: {
      primary: "bg-primary-light",
      quaternary: "bg-accent-blue-light",
      tertiary: "bg-accent-orange-light",
    },
  },
});

interface BannerProps extends VariantProps<typeof BannerVariants> {
  imgSrc: string;
  linkHref: string;
  linkLabel: string;
}

const BannerInfo = ({
  children,
  imgSrc,
  linkHref,
  linkLabel,
  bgColor,
}: PropsWithChildren<BannerProps>) => {
  return (
    <Link href={linkHref}>
      <article className={cn(BannerVariants({ bgColor }))}>
        <div className={"flex flex-col gap-4"}>
          {children}
          <div className="flex gap-1 items-center">
            <Paragraph
              fontSize={"caption2"}
              fontWeight={"semibold"}
              className={"text-label-neutral"}
            >
              {linkLabel}
            </Paragraph>
            <ArrowRight
              width={10}
              height={10}
              className={"fill-label-neutral"}
            />
          </div>
        </div>
        <div className="relative">
          <Image src={imgSrc} alt="banner" fill />
        </div>
      </article>
    </Link>
  );
};

export default BannerInfo;
