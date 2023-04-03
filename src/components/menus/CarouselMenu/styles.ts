import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const spinoffPulse = keyframes`
  0% { -webkit-transform:rotate(0deg); }
  100% { -webkit-transform:rotate(360deg); }
`;

export const ItemList = styled.div`
  width: calc(100% - 20px);
  display: flex;
  gap: 1px;
  overflow-y: none;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  svg.loadingButton {
    animation-name: ${spinoffPulse};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    margin-left: 5px;
  }
`;

export const ArrowRight = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const ArrowLeft = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

type IconButtonProps = {
  readonly variant?: "primary" | "secondary";
};

export const IconButton = styled.button<IconButtonProps>`
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  height: 34px;
  width: 34px;
  justify-content: center;
  background: #fff;
  align-items: center;
  text-align: center;
  color: ${({ theme, variant = "primary" }) =>
    variant === "primary"
      ? theme.color.SECONDARY[900]
      : theme.color.PRIMARY[900]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
    * {
      color: ${(props) => props.theme.color.SECONDARY[900]};
    }
  }
`;
