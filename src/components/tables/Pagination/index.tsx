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

  const showBorderColor = Number(pageInput) <= 1;

  const showIconColor = Number(pageInput) <= 1;

  const showLastIconColor = Number(pageInput) === lastPage;

  const showLastBorderColor = Number(pageInput) === lastPage;

  const validateDisabledInput = () =>
    Number(pageInput) === Number(lastPage) || Number(pageInput) === 1;

  return (
    <s.Container disabled={validateDisabledInput()}>
      <s.Button
        type="button"
        disabled={pageInput === "1"}
        showBorderColor={showBorderColor}
        showIconColor={showIconColor}
        onClick={() => handleOnChange(String(1))}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
        }}
      >
        <IdiArrowLeft size={12} />
        <IdiArrowLeft size={12} style={{ marginLeft: "-5px" }} />
      </s.Button>
      <s.Button
        type="button"
        disabled={pageInput === "1"}
        onClick={() => handleOnChange(String((Number(pageInput) || 1) - 1))}
        showBorderColor={showBorderColor}
        showIconColor={showIconColor}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
        }}
      >
        <IdiArrowLeft size={12} />
      </s.Button>
      <input
        type="number"
        value={Number(pageInput)}
        max={lastPage}
        onChange={(e) => handleOnChange(e.target.value || "")}
      />
      <p style={{ whiteSpace: "nowrap" }}>de {lastPage}</p>
      <s.Button
        type="button"
        disabled={Number(pageInput) === lastPage}
        onClick={() => handleOnChange(String((Number(pageInput) || 1) + 1))}
        showBorderColor={showLastBorderColor}
        showIconColor={showLastIconColor}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
        }}
      >
        <IdiArrowRight size={12} />
      </s.Button>
      <s.Button
        type="button"
        disabled={Number(pageInput) === lastPage}
        onClick={() => handleOnChange(String(lastPage))}
        showBorderColor={showLastBorderColor}
        showIconColor={showLastIconColor}
        style={{
          padding: "0px",
          backgroundColor: "#fff",
        }}
      >
        <IdiArrowRight size={12} />
        <IdiArrowRight size={12} style={{ marginLeft: "-5px" }} />
      </s.Button>
    </s.Container>
  );
};
