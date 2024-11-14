import type { Meta, StoryObj } from "@storybook/react";

import SignUpHeader from "@/components/molecules/SignUpHeader";

const meta = {
  title: "Molecules/SignUpHeader",
  component: SignUpHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isMain: { description: "" },
    title: { description: "" },
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
} satisfies Meta<typeof SignUpHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isMain: false,
    title: "회원가입",
  },
};
