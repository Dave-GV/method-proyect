import React from 'react';
import './tabla.css'

// Definición de datos estáticos de ejemplo
const datosEjemplo = [
  { id: 1, nombre: '14', edad: 28, ciudad: '14', cinco: '14', seis: '14', siete: '14', ocho: '14'},
  { id: 2, nombre: '34', edad: 35, ciudad: '51', cinco: '14', seis: '14', siete: '14', ocho: '14'},
  { id: 3, nombre: '23', edad: 22, ciudad: '62', cinco: '14', seis: '14', siete: '14', ocho: '14'},
];

// Definición de las cabeceras de la tabla
const cabeceras = ['Año', 'IIS', 'ISC', 'IETE', 'IGTI', 'ITIC', 'LASC', 'TOTAL'];
/**
 * Componente funcional para renderizar una tabla de datos.
 * @param {object} props - Las propiedades del componente.
 * @param {string[]} props.cabeceras - Array de cadenas para las cabeceras de la tabla (<thead>).
 * @param {object[]} props.datos - Array de objetos que contienen los datos a mostrar.
 */
function TablaDatos({ cabeceras, datos }) {
  return (
    <table >
      {/* Cabecera de la tabla */}
      <thead>
        <tr>
          {cabeceras.map((cabecera, index) => (
            <th 
              key={index} 
            >
              {cabecera}
            </th>
          ))}
        </tr>
      </thead>
      
      {/* Cuerpo de la tabla */}
      <tbody>
        {datos.map((fila) => (
          <tr key={fila.id}>
            {/* Usamos Object.values() para obtener un array con los valores 
              de cada propiedad del objeto 'fila' en orden.
            */}
            {Object.values(fila).map((valor, index) => (
              <td 
                key={index} 
              >
                {valor}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Opcionalmente, puedes exportar la tabla con los datos estáticos por defecto
// para el uso inicial, o simplemente exportar el componente vacío.
export default function TablaDatosConEstaticos() {
    return <TablaDatos cabeceras={cabeceras} datos={datosEjemplo} />;
}

// Si prefieres que el componente se use pasando las props:
// export default TablaDatos;