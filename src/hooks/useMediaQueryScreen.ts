import { useEffect, useState } from "react";

export function useMediaQueryScreen (query: string = '(min-width: 768px)') {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > (() => {
      const extractedNumber = query.match(/(\d+)/)
      if (extractedNumber) return extractedNumber[0]
      return 768
    })() ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', setMQuery);
    return () => mediaQuery.removeEventListener('change', setMQuery);
  }, []);

  const status = Boolean(mQuery && mQuery.matches)
  return { status }
}