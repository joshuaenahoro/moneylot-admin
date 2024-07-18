export function formatMoney(amount: number) {
  // const num = parseFloat(amount);
  const formatted = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);

  return formatted;
}
