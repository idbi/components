/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { IIcon } from "./types";

export const IdiArrowTop: React.FC<IIcon> = ({
  size = 20,
  color = "#242954",
  onClick,
  styleContainer,
}) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      style={{
        ...styleContainer,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 0,
          width: "100%",
          padding: 0,
          paddingBottom: "100%",
        }}
      >
        <svg
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
          }}
          viewBox="0 0 16 9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.21967 8.28033C0.512563 8.57322 0.987437 8.57322 1.28033 8.28033L7.75 1.81066L14.2197 8.28033C14.5126 8.57322 14.9874 8.57322 15.2803 8.28033C15.5732 7.98744 15.5732 7.51256 15.2803 7.21967L8.28033 0.21967C7.98744 -0.0732231 7.51256 -0.0732231 7.21967 0.21967L0.21967 7.21967C-0.0732233 7.51256 -0.0732233 7.98744 0.21967 8.28033Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};
