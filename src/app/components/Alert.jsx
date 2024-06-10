import React from 'react'
import './Alert.css'
import WarningSVG from '../SVG/WarningSVG'

const Alert = () => {
  return (
    <>
    <div className='alert'>
        <WarningSVG fill={"#ffff00"}></WarningSVG>
        <p>Actualmente, el servicio que me brinda el alojamiento de las bases de datos no está funcionando, por lo que algunos proyectos presentan errores.</p>
    </div>
    </>
  )
}

export default Alert