const ArrowBackIcon = (props: { size?: number; color?: string }) => (
  <svg
    width={props.size || 8}
    height={props.size || 12}
    fill="none"
    viewBox="0 0 8 12"
    {...props}
  >
    <path
      d="m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z"
      fill="#151E5A"
    />
  </svg>
);

export default ArrowBackIcon;
