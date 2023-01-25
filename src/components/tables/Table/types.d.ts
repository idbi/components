import React, { CSSProperties } from "react";
import { IPagination } from "../Pagination/types";

export interface ITable {
  loading?: boolean;
  headers: any;
  body: any;
  noHover?: boolean;
  styleWrapper?: CSSProperties;
  styleTable?: CSSProperties;
  styleTHead?: CSSProperties;
  styleTBody?: CSSProperties;
  onScroll?: (scrollLeft: number) => void;
  showPagination?: boolean,
  pagination?: IPagination;
}

export declare const Table: (props: ITable) => JSX.Element;
