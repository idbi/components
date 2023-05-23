import React from "react";
import IconClose from "@/icons/IconClose";
import { ModalContainer } from "../ModalContainer";
import { CloseIcon, StyledCardModal } from "./styles";
import { ICardModal } from "./types";

export const CardModal: React.FC<ICardModal> = ({
  show = true,
  children,
  onClose,
  backdropOpacity,
  padding,
  borderRadius,
  borderRadiusInDesktop,
  maxHeight,
  height,
  maxWidth,
  width,
  zIndex,
  overflow,
  contentLocation = "center",
  contentLocationInDesktop = "center",
  closeIcon,
  closeIconInDesktop,
  closeIcon_zIndex = 1,
  background = "#fff",
  boxShadow,
  boxShadowInDesktop,
  styleContainer,
}) => {
  if (!show) return null;

  return (
    <ModalContainer
      onClose={onClose}
      backdropOpacity={backdropOpacity}
      zIndex={zIndex}
      contentLocation={contentLocation}
      contentLocationInDesktop={contentLocationInDesktop}
      boxShadow={boxShadow}
      boxShadowInDesktop={boxShadowInDesktop}
      styleContainer={styleContainer}
    >
      <StyledCardModal
        padding={padding}
        borderRadius={borderRadius}
        borderRadiusInDesktop={borderRadiusInDesktop}
        maxHeight={maxHeight}
        height={height}
        maxWidth={maxWidth}
        width={width}
        background={background}
        overflow={overflow}
        contentLocation={contentLocation}
        contentLocationInDesktop={contentLocationInDesktop}
      >
        {(closeIcon || closeIconInDesktop) && (
          <CloseIcon
            onClick={onClose}
            closeIconInDesktop={closeIconInDesktop}
            closeIcon={closeIcon}
            zIndex={closeIcon_zIndex}
          >
            <IconClose />
          </CloseIcon>
        )}
        {children}
      </StyledCardModal>
    </ModalContainer>
  );
};
