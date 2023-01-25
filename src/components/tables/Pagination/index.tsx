import React, { useEffect, useState } from "react";
import { IdiArrowLeft } from "@/icons/IdiArrowLeft";
import { IdiArrowRight } from "@/icons/IdiArrowRight";
import type { IPagination } from "./types";
import * as s from "./styles";

export const Pagination: React.FC<IPagination> = ({
  currentPage = 1,
  lastPage = 1,
  onChangePage = () => {},
}) => {
  const [pageInput, setPageInput] = useState(String(currentPage) || "");

  useEffect(() => {
    if (currentPage === 0) return;
    if (!currentPage || (Number(currentPage) || 1) > lastPage) {
      setPageInput(String(lastPage));
      onChangePage(Number(lastPage));
    } else {
      onChangePage(Number(currentPage));
      setPageInput(String(currentPage));
    }
  }, [currentPage]);

  const handleOnChange = (value: string) => {
    if ((Number(value) || 1) > lastPage) return;
    if (lastPage > 0 && (Number(pageInput) < 1 || !Number(value))) {
      setPageInput("1");
      onChangePage(1);
      return;
    }
    if (!value) return setPageInput("");
    setPageInput(value);
    onChangePage(Number(value) || 1);
  };

  const showBorderColor = () =>
    Number(pageInput) <= 1 ? "1px solid #BFBFBF" : "1px solid #4318FF";

  const showIconColor = () => (Number(pageInput) <= 1 ? "#BFBFBF" : "#4318FF");

  const showLastIconColor = () =>
    Number(pageInput) === lastPage ? "#BFBFBF" : "#4318FF";

  const validateDisabledInput = () =>
    Number(pageInput) === Number(lastPage) || Number(pageInput) === 1;

  return (
    <s.Container disabled={validateDisabledInput()}>
      <button
        type="button"
        disabled={pageInput === "1"}
        onClick={() => handleOnChange(String(1))}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
          border: showBorderColor(),
        }}
      >
        <IdiArrowLeft size={12} color={showIconColor()} />
        <IdiArrowLeft
          size={12}
          color={showIconColor()}
          styleContainer={{ marginLeft: "-5px" }}
        />
      </button>
      <button
        type="button"
        disabled={pageInput === "1"}
        onClick={() => handleOnChange(String((Number(pageInput) || 1) - 1))}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
          border: showBorderColor(),
        }}
      >
        <IdiArrowLeft size={12} color={showIconColor()} />
      </button>
      <input
        type="number"
        value={Number(pageInput)}
        max={lastPage}
        onChange={(e) => handleOnChange(e.target.value || "")}
      />
      <p style={{ whiteSpace: "nowrap" }}>de {lastPage}</p>
      <button
        type="button"
        disabled={Number(pageInput) === lastPage}
        onClick={() => handleOnChange(String((Number(pageInput) || 1) + 1))}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
          border: `${
            Number(pageInput) === lastPage
              ? "1px solid #BFBFBF"
              : "1px solid #4318FF"
          }`,
        }}
      >
        <IdiArrowRight size={12} color={showLastIconColor()} />
      </button>
      <button
        type="button"
        disabled={Number(pageInput) === lastPage}
        onClick={() => handleOnChange(String(lastPage))}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
          border: `${
            Number(pageInput) === lastPage
              ? "1px solid #BFBFBF"
              : "1px solid #4318FF"
          }`,
        }}
      >
        <IdiArrowRight size={12} color={showLastIconColor()} />
        <IdiArrowRight
          size={12}
          color={showLastIconColor()}
          styleContainer={{ marginLeft: "-5px" }}
        />
      </button>
    </s.Container>
  );
};
