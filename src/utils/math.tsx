export const readableNumber = (num: number, fixed = 0) =>
  num.toLocaleString("en-US", {
    minimumFractionDigits: fixed,
  });
