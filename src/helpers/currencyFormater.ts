/* eslint-disable prettier/prettier */
export const currencyFormat = (amount: number | string): string => {
  let amountString = typeof amount === 'number' ? amount.toString() : amount;
  let currencyAmount = [];
  let cuenta = 0;

  for (let i = amountString.length - 1; i >= 0; i--) {
    if (cuenta % 3 === 0 && cuenta !== 0) currencyAmount.push(',');
    currencyAmount.push(amountString[i]);
    cuenta++;
  }
  currencyAmount.reverse()
  currencyAmount.push(".00")

  return `$${currencyAmount.join('')}`;
};
