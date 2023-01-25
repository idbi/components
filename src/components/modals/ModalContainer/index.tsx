import React from "react";
import Backdrop from "./Backdrop/index";
import { Content } from "./styles";
import { IModalContainer } from "./types";

export const ModalContainer: React.FC<IModalContainer> = ({
  children,
  onClose,
  backdropOpacity,
  zIndex,
  contentLocation = "center",
  contentLocationInDesktop = "center",
  boxShadow,
  boxShadowInDesktop,
  fullWidth,
  styleContainer,
}) => {
  return (
    <>
      <Backdrop
        onClose={onClose}
        backdropOpacity={backdropOpacity}
        zIndex={zIndex || 4}
      />
      <Content
        zIndex={zIndex || 4}
        contentLocation={contentLocation}
        contentLocationInDesktop={contentLocationInDesktop}
        onClick={(e) => e.stopPropagation()}
        boxShadow={boxShadow}
        boxShadowInDesktop={boxShadowInDesktop}
        fullWidth={fullWidth}
        style={styleContainer}
      >
        {children}
      </Content>
    </>
  );
};
