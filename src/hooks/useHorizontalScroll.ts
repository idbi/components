import { RefObject, useEffect, useRef } from "react";

const useHorizontalScroll = <T extends HTMLElement>(
  ref: RefObject<T | null>
) => {
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  // avoid adding multiple events in development - hot updates
  const addedEvents = useRef(false);

  useEffect(() => {
    if (!ref.current || addedEvents.current) return;
    const slider = ref.current;

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX.current;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    slider.addEventListener("mousedown", (e) => {
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    });

    addedEvents.current = true;

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [ref]);
};

export default useHorizontalScroll;
