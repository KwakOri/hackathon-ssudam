import PaginationCarousel from "@/components/molecules/PaginationCarousel";
import CardInfoBox from "@/components/organisms/CardInfoBox";
import Image from "next/image";
import { useState } from "react";

interface BadgeInfo {
  content: string;
  intent:
    | "primary"
    | "primary_light"
    | "purple"
    | "purple_light"
    | "brown"
    | "brown_light"
    | "yellow"
    | "yellow_light"
    | "red"
    | "red_light"
    | "green"
    | "green_light"
    | "blue"
    | "blue_light"
    | "gray"
    | "gray_light";
}

interface ImageItem {
  type: "image";
  src: string;
  alt: string;
}

interface CardItem {
  type: "card";
  title: string;
  badges: BadgeInfo[];
}

interface OptionInfo {
  option: string;
  optionText: string;
}

interface CardOptionItem {
  type: "card_option";
  title: string;
  badges: BadgeInfo[];
  options?: OptionInfo[];
}

type CarouselItem = ImageItem | CardItem | CardOptionItem;

interface CarouselProps {
  carouselItems: CarouselItem[];
}

const Carousel = ({ carouselItems }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const clickCursor = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-[12px] w-[375px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            {item.type === "image" && (
              <div className="flex w-full h-full">
                <Image src={item.src} alt={item.alt} fill />
              </div>
            )}
            {item.type === "card" && (
              <CardInfoBox
                badges={item.badges}
                isChecked={false}
                isOption={false}
                options={[]}
                title={item.title}
              />
            )}
            {item.type === "card_option" && (
              <CardInfoBox
                badges={item.badges}
                isChecked={false}
                isOption={true}
                options={item.options}
                title={item.title}
              />
            )}
          </div>
        ))}
      </div>
      <PaginationCarousel
        activeIndex={activeIndex}
        clickCursor={clickCursor}
        length={carouselItems.length}
      />
    </div>
  );
};

export default Carousel;
