import type { Meta, StoryObj } from "@storybook/react";

import UserProfile from "@/components/molecules/UserProfile";

const meta = {
  title: "Molecules/UserProfile",
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    avatar: { description: "사용자 프로필 이미지 주소" },
    nickname: { description: "사용자 닉네임" },
  },
  args: {},
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: "외부 API 주소",
    nickname: "유저",
  },
};
