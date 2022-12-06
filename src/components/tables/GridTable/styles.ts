/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prettier/prettier */
import { theme } from "@/theme";
import { styleScroll } from "@/theme/scroll";
import styled, { css } from "styled-components";
import { IItemRow, ITr, LocationType } from "./types";

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


export const MobileContainer = styled.div`
  overflow-x: auto;
  ${styleScroll}
`

// v2

const fontStyles = css`
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
`

const showLocation = (location: LocationType) => {
  if(location === "center") return css`
    margin: auto;
    text-align: center;
    justify-content: center;
  `;

  if(location === "right") return css`
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  `;
}

const showSeparator = (separator: boolean) => {
  if(separator) return css`
    width: 100%;
    border-right: 1.5px solid ${theme.color.QUATERNARY[300]};
  `;
}

const showItemFlex = (itemFlex: boolean) => {
  if(itemFlex) return css`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
}

const showGridColumn= (gridColumn: string | undefined) => {
  if(gridColumn?.trim()) return css`
    grid-column: ${gridColumn};
  `;
}

export const Th = styled.div<IItemRow>`
  ${fontStyles}
  font-weight: 500;
  color: ${theme.color.NEUTRAL[500]};
  padding-bottom: 8px;
  padding: 15px 10px 8px;
  ${({location}) => showLocation(location || "left")}
  ${({separator}) => showSeparator(Boolean(separator))}
  ${({itemFlex}) => showItemFlex(Boolean(itemFlex))}
  ${({gridColumn}) => showGridColumn(gridColumn)}
`

export const Td = styled.div<IItemRow>`
  ${fontStyles}
  font-weight: 400;
  color: ${theme.color.NEUTRAL[600]};
  padding: 10px;
  ${({location}) => showLocation(location || "left")}
  ${({separator}) => showSeparator(Boolean(separator))}
  ${({itemFlex}) => showItemFlex(Boolean(itemFlex))}
  ${({gridColumn}) => showGridColumn(gridColumn)}
`

export const Tr = styled.div<ITr>`
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
  ${({gridColumn}) => showGridColumn(gridColumn)}
`
