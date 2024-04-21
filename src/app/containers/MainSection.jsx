import React from 'react'
import "./MainSection.css"

const MainSection = () => {
  return (
    <section id='mainSection' className='mainSection__container'>
        <h2 className='main__greeting'>Hola, soy</h2>
        <h1 className='main__name'>JOSE GARCIA</h1>
        <h2 className='main__job'>un Programador Web FullStack</h2>
        <h2 className='main__welcome'>Bienvenido a mi portafolio :)</h2>
    </section>
  )
}

export default MainSection