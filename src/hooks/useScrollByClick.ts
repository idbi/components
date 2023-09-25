/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { useEffect, useRef } from "react";

// horizontal scroll
export const useScrollByClick = <T extends HTMLElement>({
  ref,
  intervalTime = 10,
  offsetByInterbal = 50,
}: {
  ref: React.RefObject<T | null>;
  intervalTime?: number;
  offsetByInterbal?: number;
}) => {
  const interval = useRef<NodeJS.Timeout | null>(null);

  const getMaxScrollLeft = () => {
    const maxScroll =
      (ref?.current?.scrollWidth || 0) - (ref?.current?.clientWidth || 0);
    return maxScroll;
  };

  const handleClearInterval = () => {
    if (interval.current) clearInterval(interval.current);
  };

  const moveRight = () => {
    if (interval.current) handleClearInterval();
    interval.current = setInterval(() => {
      if (!ref?.current?.scrollLeft && ref?.current?.scrollLeft !== 0) return;
      const maxScrollLeft = getMaxScrollLeft();
      const newScrollLeft = (ref.current.scrollLeft || 0) + offsetByInterbal;
      if (newScrollLeft >= maxScrollLeft) {
        ref.current.scrollLeft = maxScrollLeft;
      } else {
        ref.current.scrollLeft = newScrollLeft;
      }
    }, intervalTime);
  };

  const moveLeft = () => {
    if (interval.current) handleClearInterval();
    interval.current = setInterval(() => {
      if (!ref?.current?.scrollLeft) return;
      const newScrollLeft = ref.current.scrollLeft - offsetByInterbal;
      if (newScrollLeft <= 0) {
        ref.current.scrollLeft = 0;
      } else {
        ref.current.scrollLeft = newScrollLeft;
      }
    }, intervalTime);
  };

  const stopMotion = () => handleClearInterval();

  useEffect(() => {
    return () => handleClearInterval();
  }, []);

  return {
    moveRight,
    stopMotion,
    moveLeft,
  };
};
