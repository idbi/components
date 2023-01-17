/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { IIcon } from "./types"

export const IdiLogo: React.FC<IIcon> = ({ size = 20, color, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: `${size}px`,
        width: `${size + size / 3}px`,
        minHeight: `${size}px`,
        minWidth: `${size + size / 3}px`,
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
          viewBox="0 0 51 38"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M8.68468 37.2785H1.76362C0.793549 37.2785 0 36.4597 0 35.4591V1.81935C0 0.818547 0.793549 0 1.76362 0H8.68468C9.65499 0 10.4484 0.818547 10.4484 1.81935V35.4591C10.4485 36.4596 9.65499 37.2785 8.68468 37.2785Z"
            fill={color || "#FF82AF"}
          />
          <path
            d="M47.7558 28.1164C46.1966 30.9598 43.9696 33.1973 41.0768 34.8301C38.1827 36.4619 34.8128 37.2785 30.9667 37.2785H20.0311C17.6019 37.2785 15.6328 35.2839 15.6328 32.8226V0H30.9667C34.8128 0 38.1827 0.789835 41.0768 2.36914C43.9696 3.94904 46.1966 6.14324 47.7558 8.95055C49.3154 11.7597 50.0951 14.9531 50.0951 18.5339C50.0951 22.0796 49.3155 25.2734 47.7558 28.1164ZM36.1125 24.6941C37.6371 23.2552 38.3996 21.2016 38.3996 18.534C38.3996 15.8666 37.6371 13.8132 36.1125 12.3735C34.5871 10.9343 32.5262 10.2148 29.9276 10.2148H27.1723V24.0626C27.1723 25.6038 28.4058 26.8533 29.9276 26.8533C32.5262 26.8531 34.5871 26.1341 36.1125 24.6941Z"
            fill={color || "#242954"}
          />
        </svg>
      </div>
    </div>
  );
};
