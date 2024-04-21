import React from 'react'
import './ProyectsSection.css'

const ProyectsSection = () => {
  return (
    <section id="proyectsSection" className='proyectsSection__container'>
      <div className='proyects__container'>
        <h2 className='proyects__title'>Proyectos Personales</h2>
        <div className='proyects__cards__container'>
          <div className='proyect__card'>
            {/* ley de hom */}
            <h2 className='card__title'>Ley de ohm</h2>
            <img src="/img/ley-de-ohm_preview.jpg" layout="fill" alt="" />
            <div className='proyect__skills__container'>
              <p className='proyect__skills'>JS</p>
              <p className='proyect__skills'>HTML</p>
              <p className='proyect__skills'>CSS</p>
              <p className='proyect__skills'>Webpack</p>
            </div>
            <p>Este proyecto es una calculadora de la ley de ohm,<br /> suele ser muy util en proyectos de electronica.</p>
            <a href="https://asdjosegarcia.github.io/ley-de-ohm/" target="_blank">
              <button className='card__button'>{"Probar  >>"}</button>
            </a>
            <a href="https://github.com/asdjosegarcia/ley-de-ohm/" target="_blank">
              <button className='card__button'>{"Codigo  </>"}</button>
            </a>
          </div>
          <div className='proyect__card'>
            {/* ley de hom */}
            <h2 className='card__title'>Jigsaw-puzzle</h2>
            <img src="/img/jigsaw-preview.jpg"  alt="" />
            <div className='proyect__skills__container'>
              <p className='proyect__skills'>HTML</p>
              <p className='proyect__skills'>CSS</p>
              <p className='proyect__skills'>JS</p>
              <p className='proyect__skills'>Nextjs</p>
              <p className='proyect__skills'>Webpack</p>
              <p className='proyect__skills'>PostgresSQL</p>
              <p className='proyect__skills'>Prisma</p>
            </div>
            <p>Este proyecto es rompecabezas basado en el juego 15.<br /> cuenta con 3 niveles, una tabla de scores mediante API CRUD<br /> y aun no esta completo</p>
            <a href="https://jigsaw-asdjosegarcia.vercel.app/" target="_blank">
              <button className='card__button'>{"Probar  >>"}</button>
            </a>
            <a href="https://github.com/asdjosegarcia/jigsaw-puzzle/" target="_blank">
              <button className='card__button'>{"Codigo  </>"}</button>
            </a>
          </div>
          <div className='proyect__card'>
            {/* ley de hom */}
            <h2 className='card__title'>Open-Comerce</h2>
            <img src="/img/open-comerce.png"  alt="" />
            <div className='proyect__skills__container'>
              <p className='proyect__skills'>HTML</p>
              <p className='proyect__skills'>CSS</p>
              <p className='proyect__skills'>JS</p>
              <p className='proyect__skills'>Nextjs</p>
              <p className='proyect__skills'>Webpack</p>
              <p className='proyect__skills'>PostgresSQL</p>
              <p className='proyect__skills'>Prisma</p>
            </div>
            <p>Este proyecto es un market-place COMPLETO,<br /> cuenta con varias funcionalidades al estilo Mercado Libre<br /> incluyendo perfiles de usuarios </p>
            <a href="https://open-comerce.vercel.app/" target="_blank">
              <button className='card__button'>{"Probar  >>"}</button>
            </a>
            <a href="https://github.com/asdjosegarcia/generic-ecomerce" target="_blank">
              <button className='card__button'>{"Codigo  </>"}</button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProyectsSection