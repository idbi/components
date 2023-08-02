export const getDimension = (value: string | number) => {
  return typeof value === "string" ? value : `${value}px`;
};
