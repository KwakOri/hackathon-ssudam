import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/atoms/Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      description: "버튼유형",
      control: "multi-select",
      options: [
        "greenFill",
        "greenWeak",
        "dark",
        "light",
        "weak",
        "white",
        "redFill",
        "redWeak",
      ],
    },
    size: {
      description: "버튼 사이즈",
      control: "multi-select",
      options: ["xl", "lg", "md", "sm"],
    },
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: "greenFill",
    size: "xl",
    children: "label",
  },
};
