import React from 'react';
import {TableHead} from "components";

export const Table = () => {
  return (
    <table className={'table'}>
      <TableHead />

      <tbody>
      <tr className={'table_row'}>
        <td className={'table_td'}>RUB/CUPCAKE</td>
        <td className={'table_td'}>1.22</td>
        <td className={'table_td'}>1.22</td>
        <td className={'table_td'}>1.22</td>
      </tr>

      <tr className={'table_row'}>
        <td>USD/CUPCAKE</td>
        <td>1.22</td>
        <td>1.22</td>
        <td>1.22</td>
      </tr>

      <tr className={'table_row'}>
        <td>EUR/CUPCAKE</td>
        <td>1.22</td>
        <td>1.22</td>
        <td>1.22</td>
      </tr>

      <tr className={'table_row'}>
        <td>RUB</td>
        <td>1.22</td>
        <td>1.22</td>
        <td>1.22</td>
      </tr>

      <tr className={'table_row'}>
        <td>USD</td>
        <td>1.22</td>
        <td>1.22</td>
        <td>1.22</td>
      </tr>

      <tr className={'table_row'}>
        <td>EUR</td>
        <td>1.22</td>
        <td className={'hint'}>1.22</td>
        <td>1.22</td>
      </tr>
      </tbody>
    </table>
  );
};
