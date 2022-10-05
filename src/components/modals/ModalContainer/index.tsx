import React, { ReactNode } from "react";
import Backdrop, { BackdropType } from "./Backdrop/index";
import { Content } from "./styles";

export interface ModalContainerProps extends BackdropType {
  children: ReactNode;
  contentLocation?: "bottom" | "top" | "left" | "right" | "center";
  contentLocationInDesktop?: "bottom" | "top" | "left" | "right" | "center";
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  onClose,
  backdropOpacity,
  zIndex,
  contentLocation = "center",
  contentLocationInDesktop = "center",
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
      >
        {children}
      </Content>
    </>
  );
};
