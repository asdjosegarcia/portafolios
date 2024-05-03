// "use client"
import React from 'react'
import './AboutSection.css'
import NextjsLogo from '../SVG/NextjsLogo'
import ReactLogo from '../SVG/ReactLogo'
import PrismaLogo from '../SVG/PrismaLogo'
import AstroLogo from '../SVG/AstroLogo'
// import GithubLogo from '../SVG/GithubLogo'


const AboutSection = () => {
    return (
        <section id="aboutSection" className='aboutSection__container'>
            <div className='aboutSection__info'>
                <h2 className='about__title about__title--about'>Sobre mí</h2>
                <img className="about__perfile--picture" src="/img/linux 2.jpg" alt="" />
                <ul>
                    <li className='about__item'>
                        <div>
                        <svg /* height="24" */ viewBox="0 -960 960 960" /* width="24" */><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" /></svg>
                        </div>
                        <p className='about__country'>
                            Soy de Argentina.
                        </p>
                    </li>
                    {/* <li><p className='about__experience'>Proximamente</p></li> */}
                    <li className='about__item'>
                        <div>
                        <svg  viewBox="0 -960 960 960"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Z" /></svg>
                        </div>
                        <p className='about__Enthusiasm'>
                            Me encantan los retos de codigo y electronica.
                        </p>
                    </li>
                    <li className='about__item'>
                        <div>
                        <svg viewBox="0 -960 960 960" ><path d="M480-260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260ZM312-520l44-42 42 42 42-42-84-86-86 86 42 42Zm250 0 42-42 44 42 42-42-86-86-84 86 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /></svg>
                        </div>
                        <p className='about__hobbies'>
                            Dedico la mayor parte de mi tiempo libre a aprender para crear proyectos relacionados con la electrónica y la programación.
                        </p>
                    </li>
                </ul>
                <h2 className='about__title about__title--skills'>Habilidades en programacion</h2>
                <div className='about__skills__container'>
                    <div className='skill__card'>
                        {/* arduino */}
                       <img src="/img/icons/arduino-svgrepo-com.png" alt="" />
                        <p>Arduino</p>
                    </div>
                    <div className='skill__card'>
                        {/* css3 */}
                        <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" /> </g></svg>
                        <p>CSS3</p>
                    </div>
                    <div className='skill__card'>
                        {/* html */}
                        <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" /> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white" /> </g></svg>
                        <p>HTML5</p>
                    </div>
                    <div className='skill__card'>
                        {/* js */}
                        <svg className='js--img' width="800px" height="800px" viewBox="0 0 32 32" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" fill="#FFCA28" /> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" /> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" /> </g></svg>
                        <p>JavaScript</p>
                    </div>
                    <div className='skill__card'>
                        {/* linux */}
                       <img src="/img/icons/linux-tux.png" alt="" />
                        <p>Linux</p>
                    </div>
                    <div className='skill__card'>
                        {/* nextjs */}
                        <NextjsLogo></NextjsLogo>
                        <p>NextJS</p>
                    </div>
                    <div className='skill__card'>
                        {/* react */}
                        <ReactLogo fill="#53C1DE"></ReactLogo>
                        <p>React</p>
                    </div>
                    <div className='skill__card'>
                        {/* webpack */}
                        <img src="img/icons/webpack-svgrepo-com.png" alt="" />
                        <p>Webpack</p>
                    </div>
                    <div className='skill__card'>
                        {/* github */}
                        <img className='github--img' src="img/icons/github-142-svgrepo-com.png" alt="" />
                        <p>github</p>
                    </div>
                    <div className='skill__card'>
                        {/* git */}
                        <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none"><path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B" /><path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white" /></svg>
                        <p>git</p>
                    </div>
                    <div className='skill__card'>
                        {/* eslint */}
                        <svg width="800px" height="800px" viewBox="0 0 32 32" ><path d="M29.832,16.7,23.478,27.417A1.256,1.256,0,0,1,22.36,28H9.647a1.262,1.262,0,0,1-1.118-.59L2.173,16.71a1.256,1.256,0,0,1,0-1.272L8.527,4.676A1.344,1.344,0,0,1,9.647,4H22.356a1.344,1.344,0,0,1,1.118.678l6.354,10.786a1.2,1.2,0,0,1,0,1.238ZM24.57,20.9V11.286L16,6.466l-8.56,4.82V20.9L16,25.719Z" /* style="fill:#4b32c3" */ fill="#4b32c3" /><polygon points="21.802 19.188 16.055 22.423 10.313 19.188 10.313 12.718 16.055 9.482 21.802 12.718 21.802 19.188" /* style="fill:#8080f2" */ fill="#8080f2" /></svg>
                        <p>ESlint</p>
                    </div>
                    <div className='skill__card'>
                        {/* prisma */}
                        <PrismaLogo></PrismaLogo>
                        <p>Prisma</p>
                    </div>
                    <div className='skill__card ' >
                        <AstroLogo width="800px"/>
                        <p>Astro</p>
                    </div>

                    <div className='skill__card ' >
                        <svg width="800px" height="800px" viewBox="0 0 32 32"  /* fill="#44a8b3" */   ><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" fill="#44a8b3"/></svg>
                        <p>TailwindCSS</p>
                    </div>
                    <div className='skill__card learning'>{/* se desactivo el color de fondo para darle un gris*/}
                        {/* TS */}
                        <div className='card__message'>No disponible. Aun</div>
                        <img src="img/icons/typescript-icon-dissable.png" alt="" />
                        <p>TypeScript</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection