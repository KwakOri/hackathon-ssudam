import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "@/components/atoms/Paragraph";
import CheckInput from "@/components/molecules/CheckInput";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Molecules/CheckInput",
  component: CheckInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { description: "체크 여부" },
    onChange: { description: "체크 여부 변경 시 실행되는 함수" },
    size: { description: "체크박스 크기" },
    disabled: { description: "체크박스 비활성화 여부" },
    type: { description: "체크박스 타입" },
    children: { description: "체크박스 내용" },
  },
  args: {},
} satisfies Meta<typeof CheckInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "checkbox",
    checked: false,
    onChange: () => {},
    size: "md",
    disabled: false,
    children: <Paragraph className={"text-label-strong"}>체크박스</Paragraph>,
  },
};

export const Checkbox: Story = {
  args: {
    type: "checkbox",
    checked: true,
    onChange: () => {},
    size: "md",
    disabled: false,
    children: <Paragraph className={"text-label-strong"}>체크박스</Paragraph>,
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    const onChange = (checked: boolean) => {
      setIsChecked(checked);
    };
    return (
      <CheckInput
        {...args}
        checked={isChecked}
        onChange={onChange}
        size="md"
        disabled={false}
      >
        {args.children}
      </CheckInput>
    );
  },
};
export const Radio: Story = {
  args: {
    type: "radio",
    checked: true,
    onChange: () => {},
    size: "md",
    disabled: false,
    children: (
      <Paragraph className={"text-label-strong"}>라디오 버튼</Paragraph>
    ),
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(false);
    const onChange = (checked: boolean) => {
      setIsChecked(checked);
    };
    return (
      <CheckInput
        {...args}
        checked={isChecked}
        onChange={onChange}
        size="md"
        disabled={false}
      >
        {args.children}
      </CheckInput>
    );
  },
};
