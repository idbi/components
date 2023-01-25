import styled from "styled-components";

type ContainerProps = {
  readonly main?: boolean;
  readonly autoWidth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-width: ${({ autoWidth }) => (autoWidth ? "auto" : "300px")};
  padding: 15px 30px;
  border-radius: 15px;
  letter-spacing: -0.04em;
  background: ${({ main }) =>
    main
      ? "linear-gradient(102.45deg, rgba(211, 217, 255, 0.76) 0.8%, #9BA8FF 101.76%)"
      : ""};
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 8%);

  @media screen and (min-width: 768px) {
    max-width: ${({ autoWidth }) => (autoWidth ? "auto" : "300px")};
    margin-bottom: 0;
  }
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

export const Money = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #1b2559;
  font-size: 18px;
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
