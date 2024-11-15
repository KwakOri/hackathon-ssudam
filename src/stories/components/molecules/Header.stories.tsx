import type { Meta, StoryObj } from "@storybook/react";

import Header from "@/components/molecules/Header";

const meta = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      description: "Header 유형",
      control: "select",
      options: ["main", "label", "labelWithMenuIcon", "labelWithCloseIcon"],
    },
    title: { description: "Header Title" },
  },
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "320px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    intent: "main",
    title: "SSUDAM",
  },
};
export const Label: Story = {
  args: {
    intent: "label",
    title: "CHAT",
  },
};
export const LabelWithMenuIcon: Story = {
  args: {
    intent: "labelWithMenuIcon",
    title: "AI",
  },
};
export const LabelWithCloseIcon: Story = {
  args: {
    intent: "labelWithCloseIcon",
    title: "회원가입",
  },
};
