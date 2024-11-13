import type { Meta, StoryObj } from "@storybook/react";

import ChatModeBox from "@/components/organisms/ChatModeBox";

const meta = {
  title: "Organisms/ChatModeBox",
  component: ChatModeBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    description: {
      description: "설명",
    },
    intent: {
      description: "ChatModeBox Theme",
      control: "select",
      options: ["primary", "tertiary"],
    },
    mode: {
      description: "ChatModeBox Mode",
    },
    title: {
      description: "ChatModeBox Title",
    },
  },
  args: {},
} satisfies Meta<typeof ChatModeBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description:
      "반말로 더욱 친근하게! 친한 친구처럼 털어놓고 싶은 날 추천해요.",
    title: "들어줄게요",
    mode: "반말 모드",
    intent: "tertiary",
  },
};
