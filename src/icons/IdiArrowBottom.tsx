/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { IIcon } from "./types";

export const IdiArrowBottom: React.FC<IIcon> = ({
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
            d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L7.75 6.68934L14.2197 0.21967C14.5126 -0.0732233 14.9874 -0.0732233 15.2803 0.21967C15.5732 0.512563 15.5732 0.987437 15.2803 1.28033L8.28033 8.28033C7.98744 8.57322 7.51256 8.57322 7.21967 8.28033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};
