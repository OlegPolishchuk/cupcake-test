import React, {memo} from 'react';

interface Props {
  value: number;
  hint: boolean;
}
export const TableColumn = memo(({value, hint}:Props) => {
  console.log('TableColumn rendered')
  const finalClassName = 'table_td' + ' ' + (hint ? 'hint' : '');

  return (
    <td className={finalClassName}>{value}</td>
  );
});
