import type { Meta, StoryObj } from "@storybook/react";

import SVGIcon from "@/components/atoms/SVGIcon";
import { IconMap } from "@/icons/icons";

const meta = {
  title: "Atoms/SVGIcon",
  component: SVGIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "아이콘 유형",
      control: "select",
      options: Object.keys(IconMap),
    },
    size: {
      description: "아이콘의 크기",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    className: { description: "아이콘의 클래스명", control: "text" },
  },
  args: {},
} satisfies Meta<typeof SVGIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "Setting",
    size: "md",
    className: "",
  },
};
