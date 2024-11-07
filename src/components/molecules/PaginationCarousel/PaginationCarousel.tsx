import PaginationSource from "@/components/atoms/PaginationSource";
import { MouseEventHandler } from "react";

interface PaginationCarouselProps {
  length: number;
  currentIndex: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PaginationCarousel = ({
  length,
  currentIndex,
  onClick,
}: PaginationCarouselProps) => {
  return (
    <ul className="flex gap-1">
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <li key={i}>
            <PaginationSource isActive={i === currentIndex} onClick={onClick} />
          </li>
        ))}
    </ul>
  );
};

export default PaginationCarousel;
