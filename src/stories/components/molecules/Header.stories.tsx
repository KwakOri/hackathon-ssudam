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
      control: "multi-select",
      options: ["main", "label", "labelWithIcon"],
    },
    title: { description: "Header Title" },
  },
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "320px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
export const LabelWithIcon: Story = {
  args: {
    intent: "labelWithIcon",
    title: "AI",
  },
};
