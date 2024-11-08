import type { Meta, StoryObj } from "@storybook/react";

import SidebarCategory from "@/components/molecules/SidebarCategory";
import { IconMap } from "@/icons/icons";
import { useState } from "@storybook/preview-api";

const meta = {
  title: "Molecules/SidebarCategory",
  component: SidebarCategory,
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: "240px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "아이콘 종류",
      control: "multi-select",
      options: Object.keys(IconMap),
    },
    label: { description: "카테고리 이름" },
    isActive: { description: "현재 카테고리 활성화 여부", control: "boolean" },
    isDropDown: { description: "드롭다운 활성화 여부", control: "boolean" },
  },
  args: {},
  render: function Render(args) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const toggleCategory = () => setIsActive((prev) => !prev);
    return (
      <SidebarCategory {...args} onClick={toggleCategory} isActive={isActive} />
    );
  },
} satisfies Meta<typeof SidebarCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "Home",
    label: "홈",
    isActive: true,
    isDropDown: false,
  },
};

export const Chat: Story = {
  args: {
    icon: "Chat",
    label: "AI 심리상담",
    isActive: true,
  },
};
export const Map: Story = {
  args: {
    icon: "Map",
    label: "주변 시설 안내",
    isActive: true,
  },
};
export const Info: Story = {
  args: {
    icon: "Book",
    label: "지원 정보",
    isActive: true,
    isDropDown: true,
  },
};
