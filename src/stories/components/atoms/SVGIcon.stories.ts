import type { Meta, StoryObj } from "@storybook/react";

import SVGIcon from "@/components/atoms/SVGIcon";

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
      control: "multi-select",
      options: [
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "Book",
        "Chat",
        "Check",
        "ChevronDown",
        "ChevronLeft",
        "ChevronRight",
        "ChevronUp",
        "Close",
        "Doctor",
        "Expand",
        "Fail",
        "FilterActiveFalse",
        "FilterActiveTrue",
        "Home",
        "InIcon",
        "Info",
        "Location",
        "Map",
        "Meatball",
        "Menu",
        "Mic",
        "Out",
        "People",
        "Play",
        "Reset",
        "Setting",
        "Share",
        "StarActiveFalse",
        "StarActiveTrue",
        "Success",
        "Upload",
        "User",
        "Voice",
        "Warning",
      ],
    },
    color: {
      description: "아이콘의 색상",
      control: "multi-select",
      options: ["gray", "white", "black"],
    },
    bold: { description: "아이콘의 두께", control: "boolean" },
    size: {
      description: "아이콘의 크기",
      control: {
        type: "range",
        min: 16,
        max: 24,
        step: 4,
      },
    },
  },
  args: {},
} satisfies Meta<typeof SVGIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "Setting",
    size: 24,
    bold: false,
    color: "gray",
  },
};
