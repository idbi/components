import { useRef, useEffect } from "react";

const useFirstRender = () => {
  const ref = useRef(true);

  useEffect(() => {
    ref.current = false;
  }, []);

  return ref.current;
};

export default useFirstRender;
