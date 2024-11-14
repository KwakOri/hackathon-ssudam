import type { Meta, StoryObj } from "@storybook/react";

import LocationHolder from "@/components/molecules/LocationHolder";

const meta = {
  title: "Molecules/LocationHolder",
  component: LocationHolder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { description: "위치 내용" },
  },
  args: {},
} satisfies Meta<typeof LocationHolder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "경기도 양주시",
  },
};
