import React, { useRef } from "react";

const useDebounceFunc = <Args extends any[]>(func: (...args: Args) => any, timer = 350) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handler = (...args: Args) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      func(...args);
    }, timer);
  };

  return handler;
};

export default useDebounceFunc;
