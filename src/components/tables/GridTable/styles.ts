/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prettier/prettier */
import { theme } from "@/theme";
import { styleScroll } from "@/theme/scroll";
import styled from "styled-components";

interface IContainer {
  gridTemplateColumns?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
  margin?: string;
  gap?: string;
}

export const Container = styled.div<IContainer>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || "auto"};
  padding: ${({ padding }) => padding || "0"};
  gap: ${({ gap }) => gap || "0"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  min-width: ${({ minWidth }) => minWidth || "auto"};
  margin: ${({ margin }) => margin || "0 auto"};
  .th, .td {
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.04em;
  }
  .th {
    font-weight: 500;
    color: ${theme.color.NEUTRAL[500]};
    padding-bottom: 8px;
    padding: 15px 10px 8px;
  }
  .td {
    font-weight: 400;
    color: ${theme.color.NEUTRAL[600]};
    padding: 10px;
  }
  .tr {
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || "auto"};
    grid-column: 1 / ${({ gridTemplateColumns }) => gridTemplateColumns ? ( gridTemplateColumns?.split(" ")?.length + 1 ) :  "auto"};
    border-radius: 8px;
    background: ${theme.color.QUATERNARY[50]};
    border: 1px solid ${theme.color.QUATERNARY[300]};
    padding: 10px 0;
    margin-top: 7px;
    &:hover {
      background: ${theme.color.QUATERNARY[100]};
    }
  }
  .item-center {
    margin: auto;
    text-align: center;
    justify-content: center;
  }
  .item-right {
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  }
  .item-flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .separator {
    width: 100%;
    border-right: 1.5px solid ${theme.color.QUATERNARY[300]};
  }
`;


export const MobileContainer =styled.div`
  overflow-x: auto;
  ${styleScroll}
`