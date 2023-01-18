/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { IIcon } from "./types";

export const IdiKeyboardBackSpace: React.FC<IIcon> = ({
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
          stroke={color}
          viewBox="0 0 24 24"
          strokeWidth="0"
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
        >
          <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
        </svg>
      </div>
    </div>
  );
};
