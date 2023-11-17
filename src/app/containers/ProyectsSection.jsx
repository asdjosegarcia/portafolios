import React from 'react'
import './ProyectsSection.css'

const ProyectsSection = () => {
  return (
    <section className='proyectsSection__container'>
      <div className='proyects__container'>
        <h2 className='proyects__title'>Proyectos Personales</h2>
        <div className='proyects__cards__container'>
          <div className='proyect__card'>
            {/* ley de hom */}
            <h2 className='card__title'>Ley de ohm</h2>
            <img src="/img/ley-de-ohm_preview.jpg" alt="" />
            <div className='proyect__skills__container'>
              <p className='proyect__skills'>JS</p>
              <p className='proyect__skills'>HTML</p>
              <p className='proyect__skills'>CSS</p>
              <p className='proyect__skills'>Webpack</p>
            </div>
            {/* <p>Este proyecto es una calculador</p> */}
            <a href="https://asdjosegarcia.github.io/ley-de-ohm/" target="_blank">
              <button className='card__button'>{"Probar  >>"}</button>
            </a>
            <a href="https://github.com/asdjosegarcia/ley-de-ohm/" target="_blank">
              <button className='card__button'>{"Codigo  </>"}</button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProyectsSection