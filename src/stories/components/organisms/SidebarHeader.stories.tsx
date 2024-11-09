import type { Meta, StoryObj } from "@storybook/react";

import SidebarHeader from "@/components/organisms/SidebarHeader";

const meta = {
  title: "Organisms/SidebarHeader",
  component: SidebarHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    avatar: { description: "사용자 프로필 이미지 주소" },
    nickname: { description: "사용자 닉네임" },
    profileMessage: { description: "사용자 상태 메세지" },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SidebarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: "외부 API 주소",
    nickname: "유저",
    profileMessage: "Helper message",
  },
};
