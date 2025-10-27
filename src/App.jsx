
import './App.css'
import TablaDatosConEstaticos from './components/tabla'; 
import AccessibleTable from './components/test';
import Conbox from './components/forms';
import BasicTextFields from './components/forms';
import MultipleSelectChip from './components/select';
import BasicScatter from './components/grafica';

function App() {

  return (
    <>
      <div className="container">
        <div className='section-l'>
          <div className='bg-table'>
            <p>Ingresos</p>
            <TablaDatosConEstaticos/>
            <p>Egresos</p>
            <TablaDatosConEstaticos/>
          </div>
        </div>
        <div className='section-r'>
          <h1>Method Project</h1>
          <p>Esta es la sección donde el usuario podrá ingresar los datos para calcular el resultado</p>
          
          <BasicScatter/>
        </div>
      </div>
      
    </>
  )
}

export default App
