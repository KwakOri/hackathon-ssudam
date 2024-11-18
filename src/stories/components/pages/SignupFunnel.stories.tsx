import type { Meta, StoryObj } from "@storybook/react";

import SignupFunnel from "@/components/pages/SignupFunnel";

const meta = {
  title: "Pages/SignupFunnel",
  component: SignupFunnel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentStep: {
      options: ["email", "password", "nickname", "principles"],
      control: { type: "radio" },
    },
  },
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
} satisfies Meta<typeof SignupFunnel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentStep: "email",
  },
};
