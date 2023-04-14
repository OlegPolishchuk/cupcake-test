import React from 'react';
import {TableColumn} from "components";


interface Props {
  firstColumnTitle: string;
  currencyData: number[];
}
export const TableRow = ({firstColumnTitle, currencyData}: Props) => {
  const minValue = Math.min(...currencyData);

  return (
    <tr className={'table_row'}>
      <td className={'table_td'}>{firstColumnTitle}</td>
      {currencyData.map((currency, index) => (
        <TableColumn key={index} value={currency} hint={currency === minValue} />
      ))}
    </tr>
  );
};
