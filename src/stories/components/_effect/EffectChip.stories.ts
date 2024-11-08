import type { Meta, StoryObj } from "@storybook/react";

import EffectChip from "@/components/_effects/EffectChip";
import { EffectStyles } from "@/components/_effects/EffectChip/constants";

const meta = {
  title: "_Effect/EffectChip",
  component: EffectChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    effect: {
      description: "Effect 속성",
      control: "multi-select",
      options: Object.keys(EffectStyles),
    },
  },
  args: {},
} satisfies Meta<typeof EffectChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    effect: "dropShadowEmphasize",
  },
};
