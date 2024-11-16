import type { Meta, StoryObj } from "@storybook/react";

import AuthFunnelPanelTitle from "@/components/molecules/AuthFunnelPanelTitle";

const meta = {
  title: "Molecules/AuthFunnelPanelTitle",
  component: AuthFunnelPanelTitle,
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
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AuthFunnelPanelTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentStep: 1,
    steps: 7,
    title: "회원가입",
  },
};
