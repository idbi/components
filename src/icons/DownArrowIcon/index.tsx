const DownArrowIcon = (props: { size?: number; color?: string }) => (
  <svg
    height={props.size || 16}
    width={props.size || 16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      d="M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z"
      fill="#6B6B6B"
    />
  </svg>
);

export default DownArrowIcon;
