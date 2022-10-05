import React, { FC, MouseEvent, useEffect } from "react";
import { StyledBackdrop } from "./style";

export interface BackdropType {
  onClose?: (e?: MouseEvent<HTMLElement>) => void;
  backdropOpacity?: number;
  zIndex?: number;
}

const Backdrop: FC<BackdropType> = ({
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
