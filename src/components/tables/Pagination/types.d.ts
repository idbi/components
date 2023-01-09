import React from "react";

export interface IPagination {
  currentPage: number;
  lastPage: number;
  onChangePage: (page: number) => void;
}

export declare const Pagination: (props: IPagination) => JSX.Element;
