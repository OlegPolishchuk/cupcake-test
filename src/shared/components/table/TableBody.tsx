import React from 'react';
import {Rates} from "type/Data";
import {useFetchData} from "hooks";
import {ENDPOINTS} from "constants";
import {TableRows} from "components";

export const TableBody = () => {
  const first = useFetchData(ENDPOINTS.first);
  const second = useFetchData(ENDPOINTS.second);
  // const second = {RUB: 0, EUR: 0, USD: 0} as Rates;
  const third = useFetchData(ENDPOINTS.third);


  if (!first || !second || !third) {
    return <tbody><tr><td>Loading...</td></tr></tbody>
  }

  return (
    <tbody>
      <TableRows data={{first, second, third}}/>
    </tbody>
  );
};
