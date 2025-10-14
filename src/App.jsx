
import './App.css'
import TablaDatosConEstaticos from './components/tabla'; 
import AccessibleTable from './components/test';

function App() {

  return (
    <>
      <div className="container">
        <div className='section-l'>
          <div className='bg-table'>
            <TablaDatosConEstaticos className='tb-ingreso'/>

          </div>
        </div>
        <div className='section-r'>
          Section b
        </div>
      </div>
      
    </>
  )
}

export default App
