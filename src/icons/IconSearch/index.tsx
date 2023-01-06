import React from "react";

export interface IIcon {
  size?: number;
  color?: string;
}

export const IconSearch: React.FC<IIcon> = ({
  size = 15,
  color = "#242954",
}) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: `${size}px`,
        width: `${size}px`,
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.28106 1.28846C3.52373 1.28846 1.28846 3.52373 1.28846 6.28106C1.28846 9.0384 3.52373 11.2737 6.28106 11.2737C7.65859 11.2737 8.90497 10.7165 9.80882 9.81391C10.7144 8.90966 11.2737 7.66117 11.2737 6.28106C11.2737 3.52373 9.0384 1.28846 6.28106 1.28846ZM0.25 6.28106C0.25 2.9502 2.9502 0.25 6.28106 0.25C9.61193 0.25 12.3121 2.9502 12.3121 6.28106C12.3121 7.76063 11.7788 9.1164 10.8948 10.1655L13.5976 12.8633C13.8005 13.0659 13.8008 13.3946 13.5983 13.5976C13.3957 13.8005 13.0669 13.8008 12.864 13.5983L10.1601 10.8993C9.11175 11.7806 7.75809 12.3121 6.28106 12.3121C2.9502 12.3121 0.25 9.61193 0.25 6.28106Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};
