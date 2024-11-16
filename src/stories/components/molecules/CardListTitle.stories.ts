import type { Meta, StoryObj } from "@storybook/react";

import CardListTitle from "@/components/molecules/CardListTitle";

const meta = {
  title: "Molecules/CardListTitle",
  component: CardListTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: { description: "체크 여부", control: "boolean" },
  },
  args: {},
} satisfies Meta<typeof CardListTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    year: "24",
    month: "11",
    day: "10",
    isChecked: false,
  },
};
