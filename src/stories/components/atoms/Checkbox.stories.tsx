import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    const onChange = (checked: boolean) => {
      setIsChecked(checked);
    };
    return (
      <Checkbox
        {...args}
        checked={isChecked}
        onChange={onChange}
        size="md"
        disabled={false}
      />
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
    size: "md",
    disabled: false,
  },
};
