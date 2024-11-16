import type { Meta, StoryObj } from "@storybook/react";

import LoginPage from "@/components/pages/LoginPage";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "375px",
          height: "600px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
