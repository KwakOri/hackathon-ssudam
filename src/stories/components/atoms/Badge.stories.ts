import type { Meta, StoryObj } from "@storybook/react";

import Badge from "@/components/atoms/Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      description: "배지 색상",
      control: "select",
      options: [
        "primary",
        "primary_light",
        "purple",
        "purple_light",
        "brown",
        "brown_light",
        "yellow",
        "yellow_light",
        "red",
        "red_light",
        "green",
        "green_light",
        "blue",
        "blue_light",
        "gray",
        "gray_light",
      ],
    },
  },
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: "primary",
    children: "Label",
  },
};
