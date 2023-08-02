import React, { UIEvent, useLayoutEffect, useRef, useState } from "react";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import { Skeleton } from "@/components/skeleton/styles";
import { Pagination } from "../Pagination";
import type { ITable } from "./types";
import * as s from "./styles";

export const Table: React.FC<ITable> = ({
  loading = false,
  headers,
  body,
  noHover = false,
  styleWrapper,
  styleTable,
  styleTHead,
  styleTBody,
  onScroll,
  showPagination = true,
  pagination = {
    onChangePage: () => {},
    lastPage: 1,
    currentPage: 1,
  },
}) => {
  const [columns, setColumns] = useState<number[]>([]);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const tableRef = useRef<null | HTMLDivElement>(null);
  useHorizontalScroll(tableRef);

  useLayoutEffect(() => {
    setColumns(Array.from(Array(headers.props.children.length).keys()));
  }, [headers.props.children.length]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!onScroll) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // @ts-ignore
      onScroll(e.target?.scrollLeft || 0);
    }, 50);
  };

  return (
    <>
      <s.TableWrapper
        style={styleWrapper}
        onScroll={handleScroll}
        ref={tableRef}
      >
        <s.Container noHover={noHover} style={styleTable}>
          <thead style={styleTHead}>
            <tr>{headers}</tr>
          </thead>
          <tbody style={styleTBody}>
            {loading
              ? Array.from(Array(2).keys()).map((number) => (
                  <tr key={number}>
                    {columns.map((column) => (
                      <td key={column}>
                        <Skeleton width="100%" height="100%" />
                      </td>
                    ))}
                  </tr>
                ))
              : body}
          </tbody>
        </s.Container>
      </s.TableWrapper>
      {showPagination && !loading && (
        <Pagination
          currentPage={pagination.currentPage}
          lastPage={pagination.lastPage}
          onChangePage={pagination.onChangePage}
        />
      )}
      {showPagination && loading && (
        <Skeleton
          width="240px"
          height="20px"
          style={{ display: "block", margin: "15px auto 0" }}
        />
      )}
    </>
  );
};
