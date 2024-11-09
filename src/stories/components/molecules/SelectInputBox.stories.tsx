import type { Meta, StoryObj } from "@storybook/react";

import SelectInputBox from "@/components/molecules/SelectInputBox";

const meta = {
  title: "Molecules/SelectInputBox",
  component: SelectInputBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectInputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
