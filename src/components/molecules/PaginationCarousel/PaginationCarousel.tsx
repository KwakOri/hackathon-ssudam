import PaginationSource from "@/components/atoms/PaginationSource";

interface PaginationCarouselProps {
  length: number;
  activeIndex: number;
  clickCursor: (i: number) => void;
}

const PaginationCarousel = ({
  length,
  activeIndex,
  clickCursor,
}: PaginationCarouselProps) => {
  return (
    <ul className="flex gap-1">
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <li key={i}>
            <PaginationSource
              currentIndex={i}
              activeIndex={activeIndex}
              clickCursor={clickCursor}
            />
          </li>
        ))}
    </ul>
  );
};

export default PaginationCarousel;
