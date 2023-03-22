/* eslint-disable no-nested-ternary */
import styled, { css } from "styled-components";
import { TableStatusType } from "./types";

const tableNameColor = {
  occupied: "#383838",
  available: "#151E5A",
  selected: "#FFFFFF",
};

export const tableColor = {
  occupied: "#D0D2DE",
  available: "#FFFFFF",
  selected: "#151E5A",
};

export const tableColorStroke = {
  occupied: "",
  available: "#151E5A",
  selected: "",
};

interface IStatus {
  status: TableStatusType;
}

interface ITable extends IStatus {
  noHover: boolean;
}

interface ILabel extends IStatus {
  length: number;
}

interface ICounter extends IStatus {
  occupied: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.div<ITable>`
  position: relative;
  transition: 0.3s;
  ${({ noHover }) =>
    !noHover &&
    css`
      :hover {
        transform: scale(1.05);
      }
    `}
`;

export const Label = styled.p<ILabel>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ status }) => tableNameColor[status]};
  font-weight: bold;
  font-size: ${({ length }) =>
    length > 10
      ? "0.4rem"
      : length > 9
      ? "0.5rem"
      : length > 8
      ? "0.6rem"
      : length > 6
      ? "0.8rem"
      : length > 4
      ? "0.9rem"
      : "1.1rem"};
`;

export const Counter = styled.div<ICounter>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0px 8px 1px;
  font-size: 0.75rem;
  border-radius: 10px;
  background: ${({ occupied }) =>
    occupied ? "rgba(39, 174, 96, 0.3)" : "#E8E8E9"};
  color: ${({ occupied }) => (occupied ? "#219653" : "#979797")};
  margin-bottom: 7px;
`;
