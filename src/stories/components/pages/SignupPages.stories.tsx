import type { Meta, StoryObj } from "@storybook/react";

import SignupPages from "@/components/pages/SignupPages";

const meta = {
  title: "Pages/SignupPages",
  component: SignupPages,
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
      <div className="w-[375px] h-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SignupPages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentStep: "email",
  },
};
