import React, { FC } from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon.jsx";
import IconProps from "../IconProps";

const IconResume: FC<IconProps> = (props) => {
  const { color, size } = props;
  return (
    <Icon color={color} size={size} fill="none">
      <g clipPath="url(#clip0_11284_63320)">
        <path
          d="M2 2.5C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 13.5C0 14.0304 0.210714 14.5391 0.585786 14.9142C0.960859 15.2893 1.46957 15.5 2 15.5H6V2.5H2Z"
          fill="#D91023"
        />
        <path d="M6 2.5H12V15.5H6V2.5Z" fill="#EEEEEE" />
        <path
          d="M16 2.5H12V15.5H16C16.5304 15.5 17.0391 15.2893 17.4142 14.9142C17.7893 14.5391 18 14.0304 18 13.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5Z"
          fill="#D91023"
        />
      </g>
      <defs>
        <clipPath id="clip0_11284_63320">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

IconResume.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default IconResume;
