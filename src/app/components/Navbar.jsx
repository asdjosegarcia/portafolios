import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__name--email'>
        <h3>Jose Maria Garcia</h3>
        <h4>@asdjosegarcia</h4>
      </div>
      <div className='nav__sections'>
        <a href='' className='texto-con-linea' >
          <svg fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 30 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" /></svg>
          Inicio
          <div className="linea"></div>
        </a>
        <a href='' className='texto-con-linea' >
          <svg fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 30 24" version="1.2" baseProfile="tiny" ><path d="M17 9c0-1.381-.56-2.631-1.464-3.535-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465s2.631-.56 3.536-1.465c.904-.904 1.464-2.154 1.464-3.535zM6 19c0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4-3.75 0-6 2-6 4z" /></svg>
          Sobre mi
          <div className="linea"></div>
        </a>
        <a href='' className='nav__sections__a--objetivos texto-con-linea' >
        <svg fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 30 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M18.414 10.656c-.781-.781-2.047-.781-2.828 0l-1.586 1.586v-7.242c0-1.105-.896-2-2-2-1.105 0-2 .895-2 2v7.242l-1.586-1.586c-.781-.781-2.047-.781-2.828 0s-.781 2.047 0 2.828l6.414 6.414 6.414-6.414c.781-.781.781-2.046 0-2.828z"/></svg>
          Objetivos
          <div className="linea"></div>
        </a>
        <a href='' className='nav__sections_a--proyectos texto-con-linea' >
          <svg fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 30 24" version="1.2" baseProfile="tiny"><g><path d="M18 7c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3zm-9-1h6c.551 0 1 .449 1 1h-8c0-.551.449-1 1-1zm10 11c0 .551-.449 1-1 1h-12c-.551 0-1-.449-1-1v-1h14v1zm-14-2v-5c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v5h-14zM13 12h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1z" /></g></svg>
          Proyectos
          <div className="linea"></div>
        </a>

      </div>

      <ul className='nav__github--linkedin'>
        <a target="_blank" href={"https://github.com/asdjosegarcia  "}>
          <svg width="2rem" height="2rem" viewBox="0 0 24 24" data-name="Layer 1"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg>
          Github
        </a>
        <a target="_blank" href={"https://www.linkedin.com/in/asdjosegarcia"}>
          <svg width="2rem" height="2rem" viewBox="0 0 24 24" data-name="Layer 1"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" /></svg>
          Linkedin
        </a>
      </ul>
    </nav>
  )
}

export default Navbar 