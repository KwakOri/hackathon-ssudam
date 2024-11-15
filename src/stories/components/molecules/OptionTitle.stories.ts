import type { Meta, StoryObj } from "@storybook/react";

import OptionTitle from "@/components/molecules/OptionTitle";

const meta = {
  title: "Molecules/OptionTitle",
  component: OptionTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof OptionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    option: "Option",
    optionText: "Text",
  },
};
