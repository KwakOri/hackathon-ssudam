import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "@/components/atoms/IconButton";

const meta = {
  title: "Atoms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      description: "버튼유형",
      control: "select",
      options: ["fill", "white", "light"],
    },
    size: {
      description: "버튼 사이즈",
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: "fill",
    size: "md",
  },
};
