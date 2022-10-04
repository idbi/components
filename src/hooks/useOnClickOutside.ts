import { RefObject, useEffect } from "react";

export const useOnClickOutside = <TRef extends HTMLElement>(
  ref:
    | RefObject<TRef>
    | [RefObject<TRef>, ...RefObject<TRef>[]]
    | RefObject<any>,
  handler: (e: MouseEvent | TouchEvent) => any
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (Array.isArray(ref)) {
        // eslint-disable-next-line no-restricted-syntax
        for (const r of ref) {
          if (
            !event.target ||
            !r.current ||
            r.current.contains(event.target as HTMLElement)
          )
            return;
        }
      } else if (
        !event.target ||
        !ref.current ||
        ref.current.contains(event.target as HTMLElement)
      )
        return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      // clean event supscription
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
