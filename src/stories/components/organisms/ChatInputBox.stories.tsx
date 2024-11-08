import type { Meta, StoryObj } from "@storybook/react";

import ChatInputBox from "@/components/organisms/ChatInputBox";

const meta = {
  title: "Organisms/ChatInputBox",
  component: ChatInputBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div className="w-[343px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatInputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
