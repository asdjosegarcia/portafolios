// "use client"
import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
    return (
        <section className='aboutSection__container'>
            <div className='aboutSection__info'>
                <h2 className='about__title'>Sobre mí</h2>
                <img className="about__perfile--picture" src="/img/fakePerfile.jpg" alt="" />
                <ul>
                    <li>
                        <p className='about__country'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                            Soy de Argentina
                        </p>
                    </li>
                    {/* <li><p className='about__experience'>Proximamente</p></li> */}
                    <li><p className='about__Enthusiasm'>Me encantan los retos de codigo y electronica</p></li>
                    <li><p className='about__hobbies'>La mayor parte de mi tiempo libre es destinado a aprender,crear,reparar electronica y codigo </p></li>
                </ul>
            </div>
        </section>
    )
}

export default AboutSection