/* eslint-disable no-nested-ternary */
import styled, { css } from "styled-components";

interface InputContainerProps {
  variant?: "card" | "base";
  minQuantity: boolean;
  canDelete: boolean;
  error?: boolean;
  isDisabled?: boolean;
}

interface ISpanProps {
  isZero?: boolean;
  error?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Span = styled.span<ISpanProps>`
  color: ${({ theme, isZero, error = false }) =>
    isZero ? (error ? theme.color.ALERT[900] : theme.color.NEUTRAL[500]) : theme.color.PRIMARY[900]};
  text-align: center;
  padding: 0 8px;
  min-width: 6ch;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${({ theme }) => theme.color.NEUTRAL[50]};
  border-radius: 100px;
  padding: 3px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  transition: 0.3s ease-out;
  width: fit-content;
  align-self: flex-end;
  border: ${({ theme, error = false }) => (error ? `1px solid ${theme.color.ALERT[900]}` : "1px solid transparent")};

  @media (hover: hover) {
    :hover {
      transition: 0.3s ease-in;
      background-color: white;
      box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
      cursor: ${(props) => (props.isDisabled ? "auto" : "pointer")};
      color: ${(props) => props.theme.color.SECONDARY[900]};
    }
  }

  @media (max-width: 850px) {
    background-color: white;
    box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
  }
`;

export const ActionButton = styled.button<{ alert?: boolean; card?: boolean }>`
  background-color: ${({ theme }) => theme.color.SECONDARY[900]};
  border: none;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-out;
  font-size: 16px;

  @media (hover: hover) {
    :hover:not(:disabled) {
      cursor: pointer;
      background-color: ${({ theme, alert }) => (alert ? "initial" : theme.color.SECONDARY[700])};
      transition: 0.3s ease-in;
    }
  }

  :disabled {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.color.NEUTRAL[400]};
    color: ${({ theme }) => theme.color.NEUTRAL[400]};
  }

  ${({ alert }) =>
    alert &&
    css`
      background-color: white;
      border: 1px solid ${({ theme }) => theme.color.ALERT[900]};
      color: ${({ theme }) => theme.color.ALERT[900]};
    `}

  ${({ card }) =>
    card &&
    css`
      width: 42px;
      height: 40px;
      font-size: 18px;
    `}
`;
