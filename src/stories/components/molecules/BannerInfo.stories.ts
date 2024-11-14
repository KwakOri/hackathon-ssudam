import type { Meta, StoryObj } from "@storybook/react";

import BannerInfo from "@/components/molecules/BannerInfo";

const meta = {
  title: "Molecules/BannerInfo",
  component: BannerInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "배너 내용",
      control: {
        type: "text",
      },
    },
    imgSrc: {
      description: "배너 이미지",
      control: {
        type: "text",
      },
    },
    linkHref: {
      description: "배너 링크",
      control: {
        type: "text",
      },
    },
    linkLabel: {
      description: "배너 링크 라벨",
      control: {
        type: "text",
      },
    },
  },
  args: {},
} satisfies Meta<typeof BannerInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "배너 내용",
    imgSrc: "XXXXXX",
    linkHref: "#",
    linkLabel: "바로가기",
  },
};
