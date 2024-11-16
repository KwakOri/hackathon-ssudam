import type { Meta, StoryObj } from "@storybook/react";

import AuthFunnelPanel from "@/components/organisms/AuthFunnelPanel";

const meta = {
  title: "Organisms/AuthFunnelPanel",
  component: AuthFunnelPanel,
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
} satisfies Meta<typeof AuthFunnelPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentStep: 1,
    steps: 7,
    title: "회원가입",
  },
};
