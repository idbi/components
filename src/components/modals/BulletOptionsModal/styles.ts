import styled from "styled-components";

export const Label = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  padding-left: 15px;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
