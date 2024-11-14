import type { Meta, StoryObj } from "@storybook/react";

import ChatPlaceBox from "@/components/organisms/ChatPlaceBox";

const meta = {
  title: "Organisms/ChatPlaceBox",
  component: ChatPlaceBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    category: { description: "카테고리" },
    title: { description: "제목" },
    href: { description: "링크" },
    location: { description: "위치" },
  },
  args: {},
} satisfies Meta<typeof ChatPlaceBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: "Category",
    title: "Title",
    href: "https://www.naver.com",
    location: "Location",
  },
};
