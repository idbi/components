/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { IIcon } from "./types";

export const IdiUser: React.FC<IIcon> = ({
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
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.58952 1.50723C5.25073 1.50723 4.24693 2.49845 4.24693 3.62456C4.24693 4.75068 5.25073 5.7419 6.58952 5.7419C7.92831 5.7419 8.9321 4.75068 8.9321 3.62456C8.9321 2.49845 7.92831 1.50723 6.58952 1.50723ZM3.07564 3.62456C3.07564 1.76505 4.69388 0.335938 6.58952 0.335938C8.48516 0.335938 10.1034 1.76505 10.1034 3.62456C10.1034 5.48408 8.48516 6.91319 6.58952 6.91319C4.69388 6.91319 3.07564 5.48408 3.07564 3.62456ZM2.49198 8.71518C2.16526 8.71518 1.93357 8.86372 1.84132 9.03549C1.61012 9.46604 1.37055 10.0323 1.32094 10.5658C1.30388 10.7493 1.38291 10.9048 1.53379 10.9913C2.21632 11.3827 3.78635 12.0489 6.58952 12.0489C9.39269 12.0489 10.9627 11.3827 11.6452 10.9913C11.7961 10.9048 11.8752 10.7493 11.8581 10.5658C11.8085 10.0323 11.5689 9.46604 11.3377 9.03549C11.2455 8.86372 11.0138 8.71518 10.6871 8.71518H2.49198ZM0.809408 8.48135C1.15164 7.84405 1.84044 7.54389 2.49198 7.54389H10.6871C11.3386 7.54389 12.0274 7.84405 12.3696 8.48135C12.6281 8.96268 12.9533 9.69264 13.0244 10.4573C13.0811 11.0673 12.8025 11.6779 12.2279 12.0074C11.36 12.5051 9.58763 13.2201 6.58952 13.2201C3.59141 13.2201 1.81908 12.5051 0.951144 12.0074C0.376522 11.6779 0.0979622 11.0673 0.154681 10.4573C0.225784 9.69264 0.550931 8.96268 0.809408 8.48135Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};
