import {Rates} from "type/Data";

export const roundRates = (rates: Rates) => {
  return (Object.keys(rates) as Array<keyof Rates>)
    .reduce((acc: Rates, currentValue: keyof Rates) => {
      return {
        ...acc,
        [currentValue]: Number(rates[currentValue].toFixed(2))
      };
    }, {EUR: 0, RUB: 0, USD: 0} as Rates)
}