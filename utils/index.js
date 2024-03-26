export const getDiscountPrice = (originalPrice, discountOn) => {
  const discountPrice = originalPrice - (originalPrice * discountOn) / 100;
  return discountPrice.toFixed(2);
};
