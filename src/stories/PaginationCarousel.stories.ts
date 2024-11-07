import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PaginationCarousel from "@/components/molecules/PaginationCarousel";

const meta = {
  title: "Molecules/PaginationCarousel",
  component: PaginationCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentIndex: { description: "현재 cursor의 인덱스 위치" },
    length: { description: "carousel의 총 길이" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PaginationCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentIndex: 0,
    length: 5,
  },
};
