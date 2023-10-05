export const useTotalPrice = (price = 1, count = 0) =>
  (price * count).toFixed(2);
