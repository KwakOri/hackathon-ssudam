"use client";

import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import SVGIcon from "@/components/atoms/SVGIcon";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const SignUpHeaderArrowIconProps = cva("", {
  variants: {
    isMain: {
      true: "opacity-0 disabled: pointer-events-none",
      false: "opacity-100",
    },
  },
});

interface SignUpHeaderProps {
  title: string;
  isMain?: boolean;
}

const SignUpHeader = ({
  children,
  title,
  isMain = false,
}: PropsWithChildren<SignUpHeaderProps>) => {
  const navigate = useRouter();
  return (
    <div className="px-4 flex justify-between items-center w-full h-[58px] border-b border-line-normal">
      <button
        className={cn(SignUpHeaderArrowIconProps({ isMain }))}
        onClick={() => navigate.back()}
      >
        <SVGIcon icon={"ArrowLeft"} />
      </button>
      <Paragraph fontSize={"body1"} fontWeight={"semibold"}>
        {title}
      </Paragraph>
      <button className={"opacity-0 pointer-events-none"}>
        <SVGIcon icon={"Close"} />
      </button>
    </div>
  );
};

export default SignUpHeader;
