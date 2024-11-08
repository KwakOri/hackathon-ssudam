import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PaginationSource from "@/components/atoms/PaginationSource";

const meta = {
  title: "Atoms/PaginationSource",
  component: PaginationSource,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      description: "페이지네이션 커서 활성화 여부",
      control: "boolean",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PaginationSource>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: { isActive: true },
};
