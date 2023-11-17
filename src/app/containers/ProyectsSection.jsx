import React from 'react'
import './ProyectsSection.css'  

const ProyectsSection = () => {
  return (
    <section className='proyectsSection__container'>
      <div className='proyects__container'>
      <h2 className='proyects__title'>Proyectos Personales</h2>
      <div className='proyects__cards__container'>
        <div className='proyect__card'>
          <h2 className='card__title'>Ley de ohm</h2>
          <img src="/img/ley-de-ohm_preview.jpg" alt="" />
          <p></p>
          <a href="https://asdjosegarcia.github.io/ley-de-ohm/" target="_blank">
          <button className='card__button'>Probar</button>
          </a>
          <a href="" target="_blank">
          <button className='card__button'>{"codigo </>"}</button>
          </a>
        </div>

      </div>
      </div>
    </section>
  )
}

export default ProyectsSection