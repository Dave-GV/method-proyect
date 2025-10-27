import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import data from './test.json';

export default function BasicScatter() {
  return (
    <ScatterChart
      height={300}
      series={[
        {
          label: 'Series A',
          data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: 'Series B',
          data: data.map((v) => ({ x: v.x2, y: v.y2, id: v.id })),
        },
      ]}
      sx={{
        // Esto cambia el color del texto y elementos por defecto a blanco o claro
        '.MuiChartsAxis-tickLabel': {
          fill: 'white', // Etiquetas de los ejes
        },
        '.MuiChartsAxis-line': {
          stroke: 'rgba(255,255,255,0.7)', // Líneas de los ejes
        },
        '.MuiChartsLegend-mark, .MuiChartsLegend-label': {
          color: 'white', // Leyenda
        },
        // Opcional: Cambiar el color de las líneas de la cuadrícula
        '.MuiChartsGrid-line': {
            stroke: 'rgba(255,255,255,0.1)',
        }
      }}
    />
  );
}
