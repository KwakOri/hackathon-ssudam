import type { Meta, StoryObj } from "@storybook/react";

import CardListBox from "@/components/organisms/CardListBox";

const meta = {
  title: "Organisms/CardListBox",
  component: CardListBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { description: "제목" },
    year: { description: "년도" },
    month: { description: "월" },
    day: { description: "일" },
    content: { description: "내용" },
    from: { description: "From" },
  },
  args: {},
} satisfies Meta<typeof CardListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    year: "yy",
    month: "mm",
    day: "dd",
    from: "From",
    isChecked: false,
    badges: [
      { content: "Label 1", intent: "yellow_light" },
      { content: "Label 2", intent: "purple_light" },
      { content: "Label 3", intent: "brown_light" },
    ],
    content: "ContentContentContentContentContentContentContent",
  },
};
