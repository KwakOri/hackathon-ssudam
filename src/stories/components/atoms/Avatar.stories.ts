import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "@/components/atoms/Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Avatar의 size",
      control: "multi-select",
      options: ["xl", "lg", "md", "sm", "xs"],
    },
    shape: {
      description: "Avatar의 shape",
      control: "multi-select",
      options: ["square", "circle"],
    },
  },
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shape: "circle",
    size: "md",
  },
};
