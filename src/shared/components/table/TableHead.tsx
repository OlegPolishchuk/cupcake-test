import React from 'react';

const HEADERS = [
  'Pair name/market',
  'First',
  'Second',
  'Third'
]

export const TableHead = () => {
  return (
    <thead>
    <tr className={'table_row'}>
      {HEADERS.map(header => <th className={'table_td'}>{header}</th>)}
    </tr>
    </thead>
  )
};
