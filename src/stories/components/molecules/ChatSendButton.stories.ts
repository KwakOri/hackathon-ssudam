import type { Meta, StoryObj } from "@storybook/react";

import ChatSendButton from "@/components/molecules/ChatSendButton";

const meta = {
  title: "Molecules/ChatSendButton",
  component: ChatSendButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ChatSendButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
