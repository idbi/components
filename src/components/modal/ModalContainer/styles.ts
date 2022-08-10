import styled from "styled-components";

type ContainerProps = {
  active: boolean;
  inTheCenterForDesktop: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.transparent};
  z-index: 100;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  overflow: auto;

  @media (min-width: 768px) {
    justify-content: ${(props) => (props.inTheCenterForDesktop ? "center" : "flex-start")};
    align-items: ${(props) => (props.inTheCenterForDesktop ? "center" : "flex-start")};
  }
`;

export const SubContainer = styled.div`
  display: inline-block;
  overflow: auto;
`;
