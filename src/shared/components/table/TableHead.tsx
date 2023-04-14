import React from 'react';

const HEADERS = [
  'Pair name/market',
  'First',
  'Second',
  'Third'
]

export const TableHead = () => {
  console.log('TableHead rendered')
  return (
    <thead>
    <tr className={'table_row'}>
      {HEADERS.map(header => <th key={header} className={'table_td'}>{header}</th>)}
    </tr>
    </thead>
  )
};
