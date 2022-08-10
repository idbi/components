import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, SubContainer } from "./styles";

type ModalContainerProps = {
  active?: boolean;
  setActive(value: any): void;
  inTheCenterForDesktop?: boolean;
};

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  active,
  setActive,
  inTheCenterForDesktop,
}) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [active]);

  return ReactDOM.createPortal(
    <Container active={active} onClick={() => setActive(!active)} inTheCenterForDesktop={inTheCenterForDesktop}>
      <SubContainer onClick={(e) => e.stopPropagation()}>{children}</SubContainer>
    </Container>,
    document.getElementById("overlays")
  );
};
