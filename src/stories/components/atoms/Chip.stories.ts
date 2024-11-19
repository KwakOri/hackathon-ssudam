import type { Meta, StoryObj } from "@storybook/react";

import Chip from "@/components/atoms/Chip";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: { description: "실행 여부", control: "boolean" },
    isIcon: { description: "아이콘 변경", control: "boolean" },
  },
  args: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "label",
    isIcon: false,
    isChecked: true,
  },
};
