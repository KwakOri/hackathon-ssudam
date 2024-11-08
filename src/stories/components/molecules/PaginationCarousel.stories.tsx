import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PaginationCarousel from "@/components/molecules/PaginationCarousel";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Molecules/PaginationCarousel",
  component: PaginationCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    activeIndex: { description: "현재 cursor의 인덱스 위치" },
    length: { description: "carousel의 총 길이" },
  },
  args: {
    clickCursor: fn(),
  },
  render: function Render(args) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const clickCursor = (i: number) => {
      setActiveIndex(i);
    };
    return (
      <PaginationCarousel
        {...args}
        clickCursor={clickCursor}
        activeIndex={activeIndex}
      />
    );
  },
} satisfies Meta<typeof PaginationCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeIndex: 0,
    length: 5,
  },
};
