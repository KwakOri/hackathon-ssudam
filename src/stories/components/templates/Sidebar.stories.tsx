import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@/components/templates/Sidebar";

const meta = {
  title: "Templates/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: "240px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
