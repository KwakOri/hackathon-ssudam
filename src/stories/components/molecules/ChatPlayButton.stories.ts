import type { Meta, StoryObj } from "@storybook/react";

import ChatPlayButton from "@/components/molecules/ChatPlayButton";

const meta = {
  title: "Molecules/ChatPlayButton",
  component: ChatPlayButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "tertiary"],
    },
  },
  args: {},
} satisfies Meta<typeof ChatPlayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
  },
};
