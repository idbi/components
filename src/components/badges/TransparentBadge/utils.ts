export const getInRangeNum = (number: number, min: number, max: number) => {
  if (number >= min && number <= max) return number;
  return number < min ? min : max;
};
