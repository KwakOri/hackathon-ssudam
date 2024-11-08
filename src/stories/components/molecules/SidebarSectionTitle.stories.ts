import type { Meta, StoryObj } from "@storybook/react";

import SidebarSectionTitle from "@/components/molecules/SidebarSectionTitle";

const meta = {
  title: "Molecules/SidebarSectionTitle",
  component: SidebarSectionTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { description: "타이틀에 표시될 섹션 이름" },
  },
  args: {},
} satisfies Meta<typeof SidebarSectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "내 정보",
  },
};
