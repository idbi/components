import React from "react";
import Icon from "../Icon";

const MailSentIcon = (props: { color?: string; size: number }): JSX.Element => {
  const { color, size } = props;
  return (
    <Icon color={color} size={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M1.16602 4.95573C1.16602 2.91406 2.33268 2.03906 4.08268 2.03906H9.91602C11.666 2.03906 12.8327 2.91406 12.8327 4.95573V9.03906C12.8327 11.0807 11.666 11.9557 9.91602 11.9557H4.08268"
        stroke="#404040"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.91732 5.25L8.09148 6.70833C7.49065 7.18667 6.50482 7.18667 5.90398 6.70833L4.08398 5.25"
        stroke="#404040"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16602 9.625H4.66602"
        stroke="#404040"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16602 7.28906H2.91602"
        stroke="#404040"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default MailSentIcon;
