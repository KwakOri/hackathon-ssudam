import { Meta, StoryObj } from "@storybook/react";

import CardTitle from "@/components/molecules/CardTitle";

const meta = {
  title: "Molecules/CardTitle",
  component: CardTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: { description: "체크 여부", control: "boolean" },
  },
  args: {},
} satisfies Meta<typeof CardTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    isChecked: false,
  },
};
