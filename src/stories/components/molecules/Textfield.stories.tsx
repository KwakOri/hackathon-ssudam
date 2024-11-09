import type { Meta, StoryObj } from "@storybook/react";

import Textfield from "@/components/molecules/Textfield";
import { fn } from "@storybook/test";

const meta = {
  title: "Molecules/Textfield",
  component: Textfield,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    caption: { description: "input description" },
    errorMessage: { description: "input error message" },
    label: { description: "input label" },
    placeholder: { description: "placeholder" },
    validationOption: { description: "validation option" },
    buttonLabel: { description: "button label" },
    buttonOnClick: { description: "button click event" },
  },
  args: {
    buttonOnClick: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: "Caption",
    errorMessage: "ErrorMessage",
    label: "Label",
    placeholder: "Placeholder",
    validationOption: "ValidationOption",
    buttonLabel: "Label",
  },
};
