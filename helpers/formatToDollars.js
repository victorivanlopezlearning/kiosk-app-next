
export const formatToDollars = (qty) => {
  return qty.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};