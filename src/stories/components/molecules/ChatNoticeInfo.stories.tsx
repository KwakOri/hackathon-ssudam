import type { Meta, StoryObj } from "@storybook/react";

import ChatNoticeInfo from "@/components/molecules/ChatNoticeInfo";

const meta = {
  title: "Molecules/ChatNoticeInfo",
  component: ChatNoticeInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { description: "ChatNoticeInfo Title" },
    content: { description: "ChatNoticeInfo Content" },
    intent: {
      description: "ChatNoticeInfo Theme",
      control: "multi-select",
      options: ["redFill", "dark", "greenFill"],
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatNoticeInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "공지",
    content: "12시부터 긴급 점검이 있습니다",
    intent: "redFill",
  },
};
