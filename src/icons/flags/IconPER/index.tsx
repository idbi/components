import React from "react";
import { IIcon } from "@/icons/types";

export const IconPER: React.FC<IIcon> = ({ size = 25 }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: `${size - 5}px`,
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
          viewBox="0 0 20 18"
        >
          <g>
            <path
              d="M2 2.5C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 13.5C0 14.0304 0.210714 14.5391 0.585786 14.9142C0.960859 15.2893 1.46957 15.5 2 15.5H6V2.5H2Z"
              fill="#D91023"
            />
            <path d="M6 2.5H12V15.5H6V2.5Z" fill="#f5f5f5" />
            <path
              d="M16 2.5H12V15.5H16C16.5304 15.5 17.0391 15.2893 17.4142 14.9142C17.7893 14.5391 18 14.0304 18 13.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5Z"
              fill="#D91023"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
