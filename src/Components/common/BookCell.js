import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function BookCell(props) {
  return (
    <TableRow>
        <TableCell align="left">{props.name}</TableCell>
        <TableCell align="right">{props.value}</TableCell>
    </TableRow>
  )
}
