import styled from "styled-components";

export const CloseWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.NEUTRAL[100]};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  cursor: pointer;
`;
