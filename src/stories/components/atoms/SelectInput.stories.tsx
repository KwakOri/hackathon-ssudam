import type { Meta, StoryObj } from "@storybook/react";

import SelectInput from "@/components/atoms/SelectInput";

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
  render: (args) => {
    return <SelectInput {...args} />;
  },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSelected: true,
    children: "Option1",
  },
};
