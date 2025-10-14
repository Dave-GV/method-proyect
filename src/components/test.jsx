import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(2021, 159, 6.0, 24, 4.0),
  createData(2022, 237, 9.0, 37, 4.3),
  createData(2023, 262, 16.0, 24, 6.0),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper} sx={{ 
        backgroundColor: 'transparent', // ¡Esto quita el color de fondo!
        boxShadow: 'none',
        color: 'white',
         // Esto quita la sombra (elevación)
      }}>
      <Table sx={{ minWidth: 650, backgroundColor: 'transparent', }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Año</TableCell>
            <TableCell align="right">ISS</TableCell>
            <TableCell align="right">ISC</TableCell>
            <TableCell align="right">IETE</TableCell>
            <TableCell align="right">IGTI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
