import type { Meta, StoryObj } from "@storybook/react";

import PaginationBar from "@/components/atoms/PaginationBar";

const meta = {
  title: "Atoms/PaginationBar",
  component: PaginationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    steps: {
      description: "총 단계 수 ",
      control: { type: "range", min: 4, max: 7, step: 1 },
    },
    currentStep: {
      description: "현재 단계",
      control: { type: "range", min: 0, max: 7, step: 1 },
    },
  },
  args: {},
} satisfies Meta<typeof PaginationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: { steps: 5, currentStep: 1 },
};
