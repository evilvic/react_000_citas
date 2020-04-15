import React, { useState } from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [ error, actualizarError ] = useState(false)

    const actualizarState = ({target}) => {
        actualizarCita({
            ...cita,
            [target.name]: target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita

    const enviarCita = e => {
        e.preventDefault()

        if (mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === '') {
            actualizarError(true)
            return
        }

        actualizarError(false)

        cita.id = uuid()

        crearCita(cita)

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <>
            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={enviarCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario
