import type { Meta, StoryObj } from "@storybook/react";

import FunnelPanel from "@/components/organisms/FunnelPanel";

const meta = {
  title: "Organisms/FunnelPanel",
  component: FunnelPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentStep: { description: "현재 단계" },
    steps: { description: "총 단계" },
    title: { description: "Funnel Title" },
  },
  args: {},
} satisfies Meta<typeof FunnelPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentStep: 1,
    steps: 7,
    title: "회원가입",
  },
};
