import { resetBtnStyles } from "@/theme/utils/resetButtonStyles";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  & > button {
    width: 100%;
    flex: 1;
  }
  background-color: #fff;
`;

interface IBtnType {
  isActive: boolean;
}

export const BtnType = styled.button<IBtnType>`
  ${resetBtnStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px;
  margin-top: 11px;
  color: black;
  border-radius: 8px 8px 0px 0px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.04em;
  min-height: 69px;
  transition: 0.3s all ease-in-out;
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.color.SECONDARY[900]};
      background-color: ${({ theme }) => theme.color.QUATERNARY[200]};
    `}
`;
