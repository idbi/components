/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { IIcon } from "./types";

export const IdiShopTable: React.FC<IIcon> = ({
  size = 20,
  color = "#242954",
  colorStroke = "",
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
          stroke={colorStroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 108 101"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            cx="53.9666"
            cy="50.9988"
            r="43.072"
            stroke={colorStroke}
            strokeWidth="1.5"
            fill={color}
          />
          <rect
            x="2.76964"
            y="25.2681"
            width="34.2346"
            height="6.58186"
            rx="2.25"
            transform="rotate(-45 2.76964 25.2681)"
            stroke={colorStroke}
            strokeWidth="1.5"
            fill={color}
          />
          <rect
            x="77.5685"
            y="95.0493"
            width="34.2346"
            height="6.58186"
            rx="2.25"
            transform="rotate(-45 77.5685 95.0493)"
            stroke={colorStroke}
            strokeWidth="1.5"
            fill={color}
          />
          <rect
            x="100.512"
            y="30.8417"
            width="34.2346"
            height="6.58186"
            rx="2.25"
            transform="rotate(-135 100.512 30.8417)"
            stroke={colorStroke}
            strokeWidth="1.5"
            fill={color}
          />
          <rect
            x="25.3936"
            y="99.7089"
            width="34.2346"
            height="6.58186"
            rx="2.25"
            transform="rotate(-135 25.3936 99.7089)"
            stroke={colorStroke}
            strokeWidth="1.5"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};
