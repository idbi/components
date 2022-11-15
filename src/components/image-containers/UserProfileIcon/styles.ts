import styled from "styled-components";

export const ImgContainer = styled.div<{ hasImg?: boolean }>`
  background-color: ${({ hasImg, theme }) =>
    hasImg ? theme.color.QUATERNARY[300] : "transparent"};
  border-radius: 50%;
  color: ${({ theme }) => theme.color.QUATERNARY[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;
  font-size: var(--test);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
