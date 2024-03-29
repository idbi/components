import styled from "styled-components";

type ContainerProps = {
  readonly main?: boolean;
  readonly autoWidth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-width: ${({ autoWidth }) => (autoWidth ? "auto" : "300px")};
  padding: 15px 20px;
  border-radius: 15px;
  letter-spacing: -0.04em;
  background: ${({ main }) =>
    main ? "linear-gradient(102.45deg, rgba(211, 217, 255, 0.76) 0.8%, #9BA8FF 101.76%)" : ""};
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 8%);
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: ${({ autoWidth }) => (autoWidth ? "auto" : "300px")};
    margin-bottom: 0;
  }
`;

export const IconContainer = styled.div`
  border-radius: 20vw;
  min-width: 38px;
  height: 38px;
  min-height: 38px;
  height: 38px;
  background-color: #eff4fd;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantitySection = styled.div`
  border-right: 1px solid ${({ theme }) => theme.color.NEUTRAL[200]};
  width: 120px;
  padding-right: 15px;
  margin-right: 15px;
  flex-shrink: 2;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.color.NEUTRAL[500]};
  font-size: 15px;
  font-weight: 500;
`;
export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 0 0;
  gap: 0;
  font-weight: bold;
`;

export const Money = styled.div<{ big?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #1b2559;
  font-size: ${({ big }) => (big ? 24 : 18)}px;
`;

export const Footer = styled.span`
  display: block;
  text-align: right;
  color: #1b2559;
  font-weight: 400;
  font-size: 13.5px;
  span {
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 5px;
    text-align: left;
  }
`;
