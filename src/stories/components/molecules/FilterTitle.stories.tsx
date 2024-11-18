import type { Meta, StoryObj } from "@storybook/react";

import FilterTitle from "@/components/molecules/FilterTitle";

const meta = {
  title: "Molecules/FilterTitle",
  component: FilterTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { description: "선택 창 열림 여부" },
    select: { description: "선택 옵션" },
  },
  args: {},
} satisfies Meta<typeof FilterTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "지원정보",
    isOpen: false,
    select: [
      { value: "최신순", label: "최신순" },
      { value: "인기순", label: "인기순" },
      { value: "오래된순", label: "오래된순" },
    ],
  },
};
