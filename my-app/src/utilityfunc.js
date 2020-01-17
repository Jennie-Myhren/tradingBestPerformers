function calcPeriodChange(o, c) {
  let periodDiff = c - o;
  let periodChange = Math.round((periodDiff / o) * 100);
  return periodChange;
}

function formatCurrency(price) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(price);
}

export { calcPeriodChange, formatCurrency };
