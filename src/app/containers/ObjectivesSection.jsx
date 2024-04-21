import React from 'react'
import './ObjectivesSection.css'

const ObjectivesSection = () => {
  return (
    <section id='objectivesSection' className='objectivesSection__container'>
        <div className='objectives__container'>
        <h2 className='objectives__title'>Objetivos</h2>
        <div className='objectives'>
        <p>El objetivo es simple.</p>
        <p>Crear productos y servicios tecnologicos:</p>
        <ul>
            <li>Confiables</li>
            <li>Escalables</li>
            <li>Rentables</li>
            <li>Funcionales</li>
            <li>Efectivos</li>
        </ul>
        </div>
        </div>
    </section>
  )
}

export default ObjectivesSection