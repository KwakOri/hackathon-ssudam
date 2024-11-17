import type { Meta, StoryObj } from "@storybook/react";

import Carousel from "@/components/organisms/Carousel";

const meta = {
  title: "Organisms/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    carouselItems: [
      {
        type: "image",
        src: "/images/Property1.png",
        alt: "Image 1",
      },
      {
        type: "image",
        src: "/images/Property2.png",
        alt: "Image 2",
      },
      {
        type: "image",
        src: "/images/Property3.png",
        alt: "Image 3",
      },
    ],
  },
};
