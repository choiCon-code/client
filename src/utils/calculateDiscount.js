// calculate discount from price and salePrice

export const calculateDiscount = (price, salePrice) => {
  return Math.round(((price - salePrice) / price) * 100);
};
