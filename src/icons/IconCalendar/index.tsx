import React from "react";
import { IIcon } from "../types";

export const IconCalendar: React.FC<IIcon> = ({
  size = 18,
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
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.7924 0.5C5.09626 0.5 5.34259 0.73427 5.34259 1.02326V1.57335L10.6574 1.57336L10.6574 1.02326C10.6574 0.73427 10.9037 0.5 11.2076 0.5C11.5115 0.5 11.7578 0.734269 11.7578 1.02326V1.57337L12.8114 1.57337C14.3239 1.57337 15.5 2.79576 15.5 4.24331V12.8301C15.5 14.2776 14.3239 15.5 12.8114 15.5L3.1886 15.5C1.67607 15.5 0.5 14.2776 0.5 12.8301L0.5 5.85343L0.5 4.2433C0.5 2.79574 1.67608 1.57335 3.1886 1.57335L4.2422 1.57335V1.02326C4.2422 0.73427 4.48853 0.5 4.7924 0.5ZM4.2422 2.61986L3.1886 2.61986C2.3391 2.61986 1.60039 3.31968 1.60039 4.2433L1.60039 5.33005H14.3996V4.24331C14.3996 3.3197 13.6609 2.61988 12.8114 2.61988L11.7578 2.61988V3.16995C11.7578 3.45893 11.5115 3.6932 11.2076 3.6932C10.9037 3.6932 10.6574 3.45893 10.6574 3.16995L10.6574 2.61988L5.34259 2.61987V3.16995C5.34259 3.45893 5.09626 3.6932 4.7924 3.6932C4.48853 3.6932 4.2422 3.45893 4.2422 3.16995V2.61986ZM14.3996 6.37657H1.60039L1.60039 12.8301C1.60039 13.7537 2.3391 14.4535 3.1886 14.4535L12.8114 14.4535C13.6609 14.4535 14.3996 13.7537 14.3996 12.8301V6.37657ZM3.7076 9.07335C3.7076 8.78436 3.95393 8.55009 4.2578 8.55009H5.327C5.63086 8.55009 5.87719 8.78436 5.87719 9.07335C5.87719 9.36233 5.63086 9.5966 5.327 9.5966H4.2578C3.95393 9.5966 3.7076 9.36233 3.7076 9.07335ZM6.91521 9.07335C6.91521 8.78436 7.16154 8.55009 7.4654 8.55009H8.5346C8.83846 8.55009 9.08479 8.78436 9.08479 9.07335C9.08479 9.36233 8.83846 9.5966 8.5346 9.5966H7.4654C7.16154 9.5966 6.91521 9.36233 6.91521 9.07335ZM10.1228 9.07335C10.1228 8.78436 10.3691 8.55009 10.673 8.55009H11.7422C12.0461 8.55009 12.2924 8.78436 12.2924 9.07335C12.2924 9.36233 12.0461 9.5966 11.7422 9.5966H10.673C10.3691 9.5966 10.1228 9.36233 10.1228 9.07335ZM3.7076 11.7567C3.7076 11.4677 3.95393 11.2335 4.2578 11.2335H5.327C5.63086 11.2335 5.87719 11.4677 5.87719 11.7567C5.87719 12.0457 5.63086 12.28 5.327 12.28H4.2578C3.95393 12.28 3.7076 12.0457 3.7076 11.7567ZM6.91521 11.7567C6.91521 11.4677 7.16154 11.2335 7.4654 11.2335H8.5346C8.83846 11.2335 9.08479 11.4677 9.08479 11.7567C9.08479 12.0457 8.83846 12.28 8.5346 12.28H7.4654C7.16154 12.28 6.91521 12.0457 6.91521 11.7567ZM10.1228 11.7567C10.1228 11.4677 10.3691 11.2335 10.673 11.2335H11.7422C12.0461 11.2335 12.2924 11.4677 12.2924 11.7567C12.2924 12.0457 12.0461 12.28 11.7422 12.28H10.673C10.3691 12.28 10.1228 12.0457 10.1228 11.7567Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};