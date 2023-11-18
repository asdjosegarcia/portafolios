import React from 'react'
import './FooterSection.css'
import GithubLogo from '../SVG/GithubLogo'
import LinkedinLogo from '../SVG/LinkedinLogo'
import ReactLogo from '../SVG/ReactLogo'
import NextjsLogo from '../SVG/NextjsLogo'

const FooterSection = () => {
  return (
    <div className='footerSection__container'>
      <div className='footer__created--with'>
      <p>Proyecto creado con</p>
      <ReactLogo fill={"cbd5e1"}></ReactLogo>
      <NextjsLogo ></NextjsLogo>

      </div>
      <p>Jose Maria Garcia/@asdjosegarcia</p>
      <ul className='footer__github--linkedin'>
        <a target="_blank" href={"https://github.com/asdjosegarcia  "}>
          <GithubLogo></GithubLogo>
          Github
        </a>
        <a target="_blank" href={"https://www.linkedin.com/in/asdjosegarcia"}>
          <LinkedinLogo></LinkedinLogo>
          Linkedin
        </a>
      </ul>
      <div>


      </div>
    </div>
  )
}

export default FooterSection