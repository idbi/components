const CheckboxIcon = (props: {
  size?: number;
  color?: string;
  ischecked: boolean;
}) => (
  <svg
    width={props.size || 24}
    height={props.size || 25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    {props.ischecked ? (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z"
          fill="#4318FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z"
          fill="#4318FF"
        />
      </>
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z"
        fill="#4318FF"
      />
    )}
  </svg>
);

export default CheckboxIcon;
