import React from 'react'
import './Navbar.css'
import LinkedinLogo from '../SVG/LinkedinLogo'
import GithubLogo from '../SVG/GithubLogo'
// import Alert from './Alert'

const Navbar = () => {
  return (
    <>

    <nav className='nav'>
    {/* <Alert></Alert> */}
      <div className='nav__container'>
      <div className='nav__name--email'>
        <h3>Jose Maria Garcia</h3>
        <h4>@asdjosegarcia</h4>
      </div>
      <div className='nav__sections'>
        <a href='#mainSection' className='texto-con-linea' >
          <svg fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 30 24" version="1.2" baseProfile="tiny" ><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" /></svg>
          Inicio
          <div className="linea"></div>
        </a>
        <a href='#aboutSection' className='texto-con-linea' >
          <svg fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 30 24" version="1.2" baseProfile="tiny" ><path d="M17 9c0-1.381-.56-2.631-1.464-3.535-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465s2.631-.56 3.536-1.465c.904-.904 1.464-2.154 1.464-3.535zM6 19c0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4-3.75 0-6 2-6 4z" /></svg>
          Sobre mi
          <div className="linea"></div>
        </a>
        <a href='#proyectsSection' className='nav__sections_a--proyectos texto-con-linea' >
          <svg height="24" viewBox="0 -960 960 960" width="24"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
          Proyectos
          <div className="linea"></div>
        </a>
        <a href='#objectivesSection' className='nav__sections__a--objetivos texto-con-linea' >
          <svg height="24" viewBox="0 -960 960 960" width="24"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
          Objetivos
          <div className="linea"></div>
        </a>
      </div>

      <ul className='nav__github--linkedin'>
        <a target="_blank" href={"https://github.com/asdjosegarcia  "}>
          <GithubLogo></GithubLogo>
          Github
        </a>
        <a target="_blank" href={"https://www.linkedin.com/in/asdjosegarcia"}>
          <LinkedinLogo></LinkedinLogo>
          Linkedin
        </a>
      </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar 