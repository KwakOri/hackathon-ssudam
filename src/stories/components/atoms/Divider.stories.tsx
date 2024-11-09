import type { Meta, StoryObj } from "@storybook/react";

import Divider from "@/components/atoms/Divider";

const meta = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: { description: "Divider의 유형" },
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
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    intent: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    intent: "vertical",
  },
};
