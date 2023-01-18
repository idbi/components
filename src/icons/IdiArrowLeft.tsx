/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { IIcon } from "./types";

export const IdiArrowLeft: React.FC<IIcon> = ({
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
          viewBox="0 0 9 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.53033 0.46967C8.82322 0.762563 8.82322 1.23744 8.53033 1.53033L2.06066 8L8.53033 14.4697C8.82322 14.7626 8.82322 15.2374 8.53033 15.5303C8.23744 15.8232 7.76256 15.8232 7.46967 15.5303L0.46967 8.53033C0.176777 8.23744 0.176777 7.76256 0.46967 7.46967L7.46967 0.46967C7.76256 0.176777 8.23744 0.176777 8.53033 0.46967Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};
