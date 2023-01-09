/* eslint-disable no-console */
import { IPagination } from "../types";

const base: IPagination = {
  currentPage: 2,
  lastPage: 10,
  changePage: (value) => console.log(value),
};

export const mockPaginationProps = {
  base,
};
