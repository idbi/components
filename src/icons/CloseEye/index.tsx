import React from "react";
import Icon from "../../Icon";

const CloseEye = (props: { color?: string; size: number }): JSX.Element => {
  const { color, size } = props;
  return (
    <Icon color={color} size={size} viewBox="0 0 22 13" fill="none">
      <path
        d="M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Icon>
  );
};

export default CloseEye;
