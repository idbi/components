/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { StatusType } from "../../../types/globalTypes";

export const Card = styled.div<{
  disabled?: boolean;
  hasDetails?: boolean;
  hasBottomReason?: boolean;
}>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL[50] : "white"};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  border-radius: 8px;
  min-height: ${({ hasDetails }) => (hasDetails ? "140px" : "unset")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ hasBottomReason }) => (hasBottomReason ? "0" : "5px")};
  font-size: 14px;
  overflow: hidden;

  ${({ onClick, theme, disabled }) =>
    onClick &&
    !disabled &&
    css`
      transition: background-color 0.2s ease;
      cursor: pointer;

      :hover {
        background-color: ${theme.color.NEUTRAL[50]};
      }
    `};
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

export const ImgContainer = styled.div`
  width: 75px;
  height: 88px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;

  & > div:first-child {
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
    display: flex;
    & > img {
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ImgLabel = styled.div<{ status?: StatusType }>`
  min-height: 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.QUATERNARY[100]};
  color: ${({ theme }) => theme.color.QUATERNARY[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  flex-shrink: 0;

  ${({ theme, status }) => {
    switch (status) {
      case "draft":
        return css`
          background-color: ${theme.color.NEUTRAL[100]};
          color: ${theme.color.NEUTRAL[500]};
        `;
      case "pending":
        return css`
          background-color: ${theme.color.SECONDARY[100]};
          color: ${theme.color.SECONDARY[700]};
        `;
      case "preparing":
        return css`
          background-color: ${theme.color.STATE[100]};
          color: ${theme.color.STATE[900]};
        `;
      case "prepared":
        return css`
          background-color: ${theme.color.SUCCESS[100]};
          color: ${theme.color.SUCCESS[900]};
        `;
      case "collected":
        return css`
          background-color: #efdaff;
          color: #9600f2;
        `;
      case "delivered":
        return css`
          background-color: ${theme.color.PRIMARY[100]};
          color: ${theme.color.PRIMARY[700]};
        `;
      case "canceled":
        return css`
          background-color: ${theme.color.ALERT[100]};
          color: ${theme.color.ALERT[900]};
        `;
      case "wasted":
        return css`
          background-color: ${theme.color.NEUTRAL[100]};
          color: ${theme.color.NEUTRAL[700]};
          text-align: center;
          line-height: 14px;
        `;
    }
  }}
`;

export const ProductData = styled.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

export const Main = styled.div<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL[500] : theme.color.NEUTRAL[800]};
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-weight: 500;
`;

export const DetailsWrapper = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[500]};
  margin-top: 8px;
  font-size: 12px;
`;

export const ReasonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 8px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.color.QUATERNARY[50]};
  border-top: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  color: ${({ theme }) => theme.color.NEUTRAL[600]};
`;
