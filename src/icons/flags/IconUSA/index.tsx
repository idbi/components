import React from "react";
import { IIcon } from "@/icons/types";

export const IconUSA: React.FC<IIcon> = ({ size = 25 }) => {
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
              d="M17.7225 3.5C17.376 2.9045 16.7385 2.5 16 2.5H9V3.5H17.7225ZM0 12.5H18V13.5H0V12.5ZM9 8.5H18V9.5H9V8.5ZM9 6.5H18V7.5H9V6.5ZM0 10.5H18V11.5H0V10.5ZM2 15.5H16C16.7385 15.5 17.376 15.0955 17.7225 14.5H0.2775C0.624 15.0955 1.2615 15.5 2 15.5ZM9 4.5H18V5.5H9V4.5Z"
              fill="#B22334"
            />
            <path
              d="M0.034 13.8395C0.0425 13.886 0.052 13.9325 0.0635 13.978C0.0765 14.0285 0.0925 14.077 0.1095 14.126C0.154 14.2555 0.208 14.3805 0.276 14.4975L0.2775 14.5H17.7225L17.7235 14.498C17.7906 14.3801 17.8462 14.256 17.8895 14.1275C17.9224 14.0337 17.9478 13.9374 17.9655 13.8395C17.986 13.7295 18 13.6165 18 13.5H0C0 13.6165 0.014 13.729 0.034 13.8395ZM0 11.5H18V12.5H0V11.5ZM0 9.5V10.5H18V9.5H9H0ZM9 7.5H18V8.5H9V7.5ZM9 5.5H18V6.5H9V5.5ZM0.2775 3.5L0.276 3.5025L0.2775 3.5ZM0.064 4.022C0.0765 3.971 0.094 3.9225 0.11 3.8735C0.0926365 3.92235 0.0772902 3.97189 0.064 4.022ZM9 4.5H18C18 4.3835 17.986 4.2705 17.9655 4.16C17.948 4.06205 17.9224 3.96572 17.889 3.872C17.8457 3.74291 17.7899 3.61832 17.7225 3.5H9V4.5Z"
              fill="#EEEEEE"
            />
            <path
              d="M9 2.5H2C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 9.5H9V2.5Z"
              fill="#3C3B6E"
            />
            <path
              d="M1.00098 3.863L1.30998 4.0875L1.19198 4.45L1.50048 4.226L1.80948 4.45L1.69148 4.0875L2.00048 3.863H1.61848L1.50048 3.5L1.38298 3.863H1.00098ZM2.00098 4.863L2.30998 5.0875L2.19198 5.45L2.50048 5.226L2.80948 5.45L2.69148 5.0875L3.00048 4.863H2.61848L2.50048 4.5L2.38298 4.863H2.00098ZM4.00098 4.863L4.30998 5.0875L4.19198 5.45L4.50048 5.226L4.80948 5.45L4.69148 5.0875L5.00048 4.863H4.61848L4.50048 4.5L4.38298 4.863H4.00098ZM6.00098 4.863L6.30998 5.0875L6.19198 5.45L6.50048 5.226L6.80948 5.45L6.69148 5.0875L7.00048 4.863H6.61848L6.50048 4.5L6.38298 4.863H6.00098ZM2.00098 6.863L2.30998 7.0875L2.19198 7.45L2.50048 7.226L2.80948 7.45L2.69148 7.0875L3.00048 6.863H2.61848L2.50048 6.5L2.38298 6.863H2.00098ZM4.00098 6.863L4.30998 7.0875L4.19198 7.45L4.50048 7.226L4.80948 7.45L4.69148 7.0875L5.00048 6.863H4.61848L4.50048 6.5L4.38298 6.863H4.00098ZM6.00098 6.863L6.30998 7.0875L6.19198 7.45L6.50048 7.226L6.80948 7.45L6.69148 7.0875L7.00048 6.863H6.61848L6.50048 6.5L6.38298 6.863H6.00098ZM3.00098 3.863L3.30998 4.0875L3.19198 4.45L3.50048 4.226L3.80948 4.45L3.69148 4.0875L4.00048 3.863H3.61848L3.50048 3.5L3.38298 3.863H3.00098ZM5.00098 3.863L5.30998 4.0875L5.19198 4.45L5.50048 4.226L5.80948 4.45L5.69148 4.0875L6.00048 3.863H5.61848L5.50048 3.5L5.38298 3.863H5.00098ZM7.00098 3.863L7.30998 4.0875L7.19198 4.45L7.50048 4.226L7.80948 4.45L7.69148 4.0875L8.00048 3.863H7.61848L7.50048 3.5L7.38298 3.863H7.00098ZM1.00098 5.863L1.30998 6.0875L1.19198 6.45L1.50048 6.226L1.80948 6.45L1.69148 6.0875L2.00048 5.863H1.61848L1.50048 5.5L1.38298 5.863H1.00098ZM3.19198 6.45L3.50048 6.226L3.80948 6.45L3.69148 6.0875L4.00048 5.863H3.61848L3.50048 5.5L3.38298 5.863H3.00098L3.30998 6.0875L3.19198 6.45ZM5.00098 5.863L5.30998 6.0875L5.19198 6.45L5.50048 6.226L5.80948 6.45L5.69148 6.0875L6.00048 5.863H5.61848L5.50048 5.5L5.38298 5.863H5.00098ZM7.00098 5.863L7.30998 6.0875L7.19198 6.45L7.50048 6.226L7.80948 6.45L7.69148 6.0875L8.00048 5.863H7.61848L7.50048 5.5L7.38298 5.863H7.00098ZM1.00098 7.863L1.30998 8.0875L1.19198 8.45L1.50048 8.226L1.80948 8.45L1.69148 8.0875L2.00048 7.863H1.61848L1.50048 7.5L1.38298 7.863H1.00098ZM3.19198 8.45L3.50048 8.226L3.80948 8.45L3.69148 8.0875L4.00048 7.863H3.61848L3.50048 7.5L3.38298 7.863H3.00098L3.30998 8.0875L3.19198 8.45ZM5.00098 7.863L5.30998 8.0875L5.19198 8.45L5.50048 8.226L5.80948 8.45L5.69148 8.0875L6.00048 7.863H5.61848L5.50048 7.5L5.38298 7.863H5.00098ZM7.00098 7.863L7.30998 8.0875L7.19198 8.45L7.50048 8.226L7.80948 8.45L7.69148 8.0875L8.00048 7.863H7.61848L7.50048 7.5L7.38298 7.863H7.00098Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
