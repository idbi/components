import styled, { css } from "styled-components";
import MQ from "@/theme/media-query";

export const Container = styled.div`
  background: transparent;
  color: #383838;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${MQ.md} {
    text-align: center;
  }
`;

export const Card = styled.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 15px;
`;

export const Header = styled.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 25px 20px;
`;

export const Title = styled.div`
  color: #151e5a;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
`;

export const Content = styled.p`
  color: #808080;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

export const Options = styled.div<{ bottom?: boolean }>`
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  button {
    font-size: 14px;
  }

  ${({ bottom }) => {
    if (bottom)
      return css`
        padding: 0;
        margin: 10px 0;
        button {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        }
      `;
  }}
`;
