export const formatNumber = (num: number, fractionDigits = 2) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(num);
};

export const formatNumberDecimals = (
  value: number | string,
  config?: {
    minFractionDigits?: number;
    maxFractionDigits?: number;
    group?: boolean;
  }
) => {
  const num = typeof value === "number" ? value : Number(value);
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: config?.minFractionDigits ?? 2,
    maximumFractionDigits: config?.maxFractionDigits ?? 4,
    useGrouping: config?.group ?? false,
  }).format(num);
};

export const formatUnitAmount = (
  value: number | string,
  unit: string | null | undefined
) => {
  return formatNumberDecimals(value, {
    minFractionDigits: unit === "U" ? 0 : 2,
  });
};

export const formatPrice = (value: number | string) => {
  return formatNumberDecimals(value, { group: true });
};

export const formatUnit = (value: number | string, group?: boolean) => {
  return formatNumberDecimals(value, { group, minFractionDigits: 0 });
};
