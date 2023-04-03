/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";
import { getDisabled } from "@/theme/utils";

interface IReadingMode {
  readingMode?: boolean
}

interface IContainer extends IReadingMode{
  withDescription?: boolean;
  disabled?: boolean;
}

export const Container = styled.div<IContainer>`
  padding: ${({ withDescription }) => (withDescription ? "3px 14px 5px" : "0 14px")};
  display: ${({ withDescription }) => (withDescription ? "block" : "flex")};
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[300]};
  background: #fff;
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: ${({ withDescription }) => (withDescription ? "0px 0" : "12px 0")};
    background: transparent;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.color.NEUTRAL[700]};
    ::placeholder {
      color: ${({ theme }) => theme.color.NEUTRAL[500]};
    }
  }
  ${({readingMode}) => readingMode && css`
    border: none;
    padding: 0;
    background: transparent;
    input {
      padding: 0;
    }
  `}
  ${({ disabled }) => getDisabled({ disabled })}; 
`;

export const SubContainer = styled.div<IReadingMode>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({readingMode}) => readingMode ? "flex-start" : "space-between"};
  gap: 3px;
`

export const Description = styled.span`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.NEUTRAL[500]};
`

export const Suffix = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.NEUTRAL[500]};
`

export const Value = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.color.PRIMARY[900]};
`