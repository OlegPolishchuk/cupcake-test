import React from 'react';
import {Rates} from "type/Data";
import {TableRow} from "components";
import {getCurrencyRatio} from "utils";

interface Props {
  data: {
    first: Rates;
    second: Rates;
    third: Rates;
  }
}

export const TableRows = ({data}: Props) => {
  const {third, second, first} = data;

  return (
    <>
      <TableRow
        firstColumnTitle={'RUB/CUPCAKE'}
        currencyData={[first.RUB, second.RUB, third.RUB]}
      />

      <TableRow
        firstColumnTitle={'USD/CUPCAKE'}
        currencyData={[first.USD, second.USD, third.USD]}
      />

      <TableRow
        firstColumnTitle={'EUR/CUPCAKE'}
        currencyData={[first.EUR, second.EUR, third.EUR]}
      />

      <TableRow
        firstColumnTitle={'RUB/USD'}
        currencyData={getCurrencyRatio(
          {
            values: data,
            mainCur: 'RUB',
            secondaryCur: 'USD',
          }
        )}
      />

      <TableRow
        firstColumnTitle={'RUB/EUR'}
        currencyData={getCurrencyRatio(
          {
            values: data,
            mainCur: 'RUB',
            secondaryCur: 'EUR',
          }
        )}
      />

      <TableRow
        firstColumnTitle={'EUR/USD'}
        currencyData={getCurrencyRatio(
          {
            values: data,
            mainCur: 'EUR',
            secondaryCur: 'USD',
          }
        )}
      />

    </>
  );
};
