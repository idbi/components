import styled from "styled-components";

interface Props {
  opacity?: number;
  zIndex?: number;
}
export const StyledBackdrop = styled.div<Props>`
  background-color: ${(props) =>
    `rgba(0, 0, 0, ${props.opacity ? props.opacity : "0.5"})`};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.zIndex ? props.zIndex : "auto")};
  cursor: auto;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
