import type { Meta, StoryObj } from "@storybook/react";

import SelectPlaceholder from "@/components/atoms/SelectPlaceholder";

const meta = {
  title: "Atoms/SelectPlaceholder",
  component: SelectPlaceholder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { description: "텍스트 내용" },
  },
  args: {},
} satisfies Meta<typeof SelectPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "선택하세요",
  },
};
