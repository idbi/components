import React from "react";

const CheckIcon = (props: { size?: number; color?: string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    color={props.color || "#2DC96F"}
    height={20}
    width={20}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
      stroke="none"
    />
  </svg>
);

export default CheckIcon;
