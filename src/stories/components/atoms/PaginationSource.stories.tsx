import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PaginationSource from "@/components/atoms/PaginationSource";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Atoms/PaginationSource",
  component: PaginationSource,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentIndex: { description: "현재 인덱스" },
    activeIndex: { description: "활성화된 인덱스" },
  },
  args: {
    clickCursor: fn(),
  },
  render: function Render(args) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const clickCursor = (i: number) => {
      setIsActive((prev) => !prev);
    };
    return (
      <PaginationSource
        {...args}
        clickCursor={clickCursor}
        currentIndex={1}
        activeIndex={isActive ? 1 : 2}
      />
    );
  },
} satisfies Meta<typeof PaginationSource>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: { currentIndex: 1, activeIndex: 2 },
};
