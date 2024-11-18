import PaginationCarousel from "@/components/molecules/PaginationCarousel";
import CardInfoBox from "@/components/organisms/CardInfoBox";
import Image from "next/image";
import { useState, useRef } from "react";

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
  const startX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX.current - currentX;

    if (diffX > 50) {
      handleNext();
      startX.current = null;
    } else if (diffX < -50) {
      handlePrev();
      startX.current = null;
    }
  };

  const handleNext = () => {
    if (activeIndex < carouselItems.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const clickCursor = (index: number) => {
    setActiveIndex(index);
  };

  const getSlideWidth = (item: CarouselItem) => {
    if (item.type === "image") return 343;
    if (item.type === "card") return 240;
    if (item.type === "card_option") return 200;
    return 0;
  };

  return (
    <div className="flex flex-col items-center ml-[16px]">
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${
              activeIndex * (getSlideWidth(carouselItems[activeIndex]) + 12)
            }px)`,
          }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 mr-[12px]"
              style={{ width: getSlideWidth(item) }}
            >
              {item.type === "image" && (
                <div className="relative h-[96px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
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
