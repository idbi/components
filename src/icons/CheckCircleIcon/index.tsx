import React from "react";
import Icon from "../../Icon";

interface IProps {
  color?: string;
  size: number;
  viewBox: string;
}

const CheckCircleIcon: React.FC<IProps> = ({ color, size, viewBox }): JSX.Element => {
  return (
    <Icon color={color} size={size} viewBox={viewBox} fill="none">
      <path
        d="M26.726 13.863c0 7.104-5.76 12.863-12.863 12.863C6.759 26.726 1 20.966 1 13.863 1 6.759 6.759 1 13.863 1c7.104 0 12.863 5.759 12.863 12.863Z"
        fill={color || "#1BCC00"}
      />
      <path
        d="m7.926 13.164 4.398 4.657 7.475-7.916m6.927 3.958c0 7.104-5.76 12.863-12.863 12.863C6.759 26.726 1 20.966 1 13.863 1 6.759 6.759 1 13.863 1c7.104 0 12.863 5.759 12.863 12.863Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CheckCircleIcon;
