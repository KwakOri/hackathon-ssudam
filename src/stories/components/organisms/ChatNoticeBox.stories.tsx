import type { Meta, StoryObj } from "@storybook/react";

import ChatNoticeBox from "@/components/organisms/ChatNoticeBox/ChatNoticeBox";

const meta = {
  title: "Organisms/ChatNoticeBox",
  component: ChatNoticeBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { description: "ChatNoticeBox Title" },
    content: { description: "ChatNoticeBox Content" },
    intent: {
      description: "ChatNoticeBox Theme",
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
} satisfies Meta<typeof ChatNoticeBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "공지",
    content: "12시부터 긴급 점검이 있습니다",
    intent: "redFill",
  },
};
