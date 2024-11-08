import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import AvatarDummy from "/public/images/avatar.png";

const AvatarVariants = cva("relative overflow-hidden", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "",
    },
    size: {
      xl: "w-[120px] h-[120px]",
      lg: "w-[80px] h-[80px]",
      md: "w-[60px] h-[60px]",
      sm: "w-8 h-8",
      xs: "w-6 h-6",
    },
  },
  compoundVariants: [
    {
      shape: "square",
      size: "xl",
      class: "rounded-[20px]",
    },
    {
      shape: "square",
      size: "lg",
      class: "rounded-[14px]",
    },
    {
      shape: "square",
      size: "md",
      class: "rounded-[10px]",
    },
    {
      shape: "square",
      size: "sm",
      class: "rounded-[6px]",
    },
    {
      shape: "square",
      size: "xs",
      class: "rounded-[4px]",
    },
  ],
  defaultVariants: {
    shape: "square",
    size: "md",
  },
});

interface AvatarProps extends VariantProps<typeof AvatarVariants> {
  avatar: string;
}

const Avatar = ({ shape, size, avatar }: AvatarProps) => {
  return (
    <div className={cn(AvatarVariants({ shape, size }))}>
      <Image src={AvatarDummy} alt="avatar" fill />
    </div>
  );
};

export default Avatar;
