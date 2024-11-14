import type { Meta, StoryObj } from "@storybook/react";

import SelectInput from "@/components/atoms/SelectInput";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Atoms/SelectInput",
  component: SelectInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { description: "" },
    isSelected: { description: "" },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: "240px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSelected: true,
    children: "Option1",
  },
};

export const Interaction: Story = {
  args: {
    isSelected: false,
    children: "Option2",
  },
  render: (args) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    return (
      <SelectInput
        {...args}
        onClick={() => setIsSelected((prev) => !prev)}
        isSelected={isSelected}
      />
    );
  },
};
