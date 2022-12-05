/* eslint-disable prettier/prettier */
import { theme } from "@/theme";
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
  padding: ${({ withDescription }) => (withDescription ? "5px 14px" : "0 14px")};
  display: ${({ withDescription }) => (withDescription ? "block" : "flex")};
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.color.NEUTRAL[300]};
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: ${({ withDescription }) => (withDescription ? "0px 0" : "12px 0")};
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.04em;
    color: ${theme.color.NEUTRAL[700]};
    ::placeholder {
      color: ${theme.color.NEUTRAL[500]};
    }
  }
  ${({readingMode}) => readingMode && css`
    border: none;
    padding: 0;
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
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.04em;
  color: ${theme.color.NEUTRAL[500]};
`

export const Suffix = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.04em;
  color: ${theme.color.NEUTRAL[500]};
`

export const Value = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.color.PRIMARY[900]};
`