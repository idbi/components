import styled from "styled-components";

export const ImgContainer = styled.div<{ hasImg?: boolean }>`
  background-color: ${({ theme, hasImg }) =>
    hasImg ? theme.color.QUATERNARY[300] : "transparent"};
  border: 1px solid white;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.QUATERNARY[900]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
