import type { Meta, StoryObj } from "@storybook/react";

import TextButton from "@/components/molecules/TextButton";

const meta = {
  title: "Molecules/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { description: "버톤 내용" },
    size: {
      description: "버튼 사이즈",
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {},
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "버튼",
    size: "md",
  },
};
