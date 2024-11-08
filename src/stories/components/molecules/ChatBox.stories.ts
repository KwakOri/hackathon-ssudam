import type { Meta, StoryObj } from "@storybook/react";

import ChatBox from "@/components/molecules/ChatBox";

const meta = {
  title: "Atoms/ChatBox",
  component: ChatBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isMine: { description: "내가 보낸 메시지인지 여부", control: "boolean" },
    type: {
      description: "메시지 박스 타입",
      control: "multi-select",
      options: ["chat", "notice"],
    },
    children: { description: "메시지 내용" },
  },
  args: {},
} satisfies Meta<typeof ChatBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isMine: true,
    type: "chat",
    children: "예시 메시지",
  },
};

export const IsMine: Story = {
  args: {
    isMine: true,
    type: "chat",
    children: "저 너무 힘들어요. 도움이 필요해요.",
  },
};

export const IsNotMine: Story = {
  args: {
    isMine: false,
    type: "chat",
    children: "안녕하세요 그런 고민이 있으셨군요",
  },
};
