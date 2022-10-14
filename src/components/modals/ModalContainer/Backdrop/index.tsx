import React, { FC, useEffect } from "react";
import { StyledBackdrop } from "./style";
import { IBackdrop } from "./types";

const Backdrop: FC<IBackdrop> = ({
  onClose = () => {},
  backdropOpacity,
  zIndex,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <StyledBackdrop
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      opacity={backdropOpacity}
      zIndex={zIndex}
    />
  );
};

export default Backdrop;
