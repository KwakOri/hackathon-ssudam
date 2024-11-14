import type { Meta, StoryObj } from "@storybook/react";

import BannerInfoTypeA from "@/components/organisms/Banners/BannerInfoTypeA";

const meta = {
  title: "Organisms/Banners/BannerInfoTypeA",
  component: BannerInfoTypeA,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof BannerInfoTypeA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
