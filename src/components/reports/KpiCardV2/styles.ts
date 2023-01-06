import styled, { css } from "styled-components";

interface CompareProps {
  isUp: boolean;
}

export const Container = styled.div<{ autoWidth: boolean }>`
  width: ${({ autoWidth }) => (autoWidth ? "100%" : "200px")};
  min-width: 200px;
  padding: 10px 15px;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`;

export const TitleContainer = styled.p`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #bdbdbd;
  font: 600 14px Poppins;
`;

export const ValueContainer = styled.div`
  min-height: 68px;
  > strong {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    color: #000000;
  }
`;

export const Compare = styled.section<CompareProps>`
  margin-top: 10px;
  line-height: 15px;
  > strong {
    font: 600 12px Poppins !important;
    display: flex;
    align-items: center;
    color: #ea345f;
    transition: all 0.2s;

    ${({ isUp }) =>
      isUp &&
      css`
        color: #27ae60;
      `}

    > svg {
      transform: rotate(-90deg);
      font-size: 14px;
      margin-right: 2px;
      transition: all 0.2s;

      ${({ isUp }) =>
        isUp &&
        css`
          transform: rotate(90deg);
        `}
    }
  }
  p {
    font: normal 12px Poppins !important;
    color: #6b6b6b !important;
  }
`;
