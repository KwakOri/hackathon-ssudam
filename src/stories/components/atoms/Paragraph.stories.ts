import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "@/components/atoms/Paragraph/Paragraph";

const meta = {
  title: "Atoms/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { description: "텍스트 내용" },
    fontSize: { description: "텍스트 크기와 줄간격" },
    fontWeight: { description: "텍스트 두께" },
    className: { description: "추가적인 style 속성 (Tailwind CSS)" },
  },
  args: {},
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "텍스트입니다",
    className: "text-label-neutral",
    fontSize: "body1",
    fontWeight: "semibold",
  },
};
