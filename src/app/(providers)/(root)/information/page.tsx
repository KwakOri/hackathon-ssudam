"use client";
import Header from "@/components/molecules/Header";
import Page from "@/components/Layouts/Page/Page";

import Section from "@/components/Layouts/Section/Section";
import Carousel from "@/components/organisms/Carousel";

export default function InformationPage() {
  return (
    <Page>
      <Header intent="main" />
      <Section>
        <Carousel
          carouselItems={[
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
          ]}
        />
      </Section>
    </Page>
  );
}
