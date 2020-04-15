import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita'

function App() {

  const [ citas, guardarCita ] = useState([])

  const crearCita = cita => {
    guardarCita([
      ...citas,
      cita
    ])
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administrar tus citas</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
