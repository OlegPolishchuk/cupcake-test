import {Rates} from "type/Data";

interface Data {
  values: {first: Rates, second: Rates, third: Rates};
  mainCur: keyof Rates;
  secondaryCur: keyof Rates;
  // income: keyof Rates;
}
export const getCurrencyRatio = ({values, mainCur, secondaryCur}: Data) => {
  const {second, third, first} = values;

  const mainCurValues = [first[mainCur], second[mainCur], third[mainCur]];
  const secondaryCurValues = [first[secondaryCur], second[secondaryCur], third[secondaryCur]];

  return mainCurValues
    .map((currency, index) => {
      if (secondaryCurValues[index] === 0) {
        return 0
      }

      return Number((currency / secondaryCurValues[index]).toFixed(2))
    })
}