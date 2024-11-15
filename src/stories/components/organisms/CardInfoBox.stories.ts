import type { Meta, StoryObj } from "@storybook/react";

import CardInfoBox from "@/components/organisms/CardInfoBox";

const meta = {
  title: "Organisms/CardInfoBox",
  component: CardInfoBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CardInfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    isChecked: false,
    isOption: false,
    badges: [
      { content: "Label 1", intent: "yellow_light" },
      { content: "Label 2", intent: "purple_light" },
      { content: "Label 3", intent: "brown_light" },
    ],
    options: [
      { option: "Option", optionText: "Text" },
      { option: "Option", optionText: "Text" },
    ],
  },
};
