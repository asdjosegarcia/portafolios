// "use client"
import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
    return (
        <section className='aboutSection__container'>
            <div className='aboutSection__info'>
                <h2 className='about__title about__title--about'>Sobre mí</h2>
                <img className="about__perfile--picture" src="/img/fakePerfile.jpg" alt="" />
                <ul>
                    <li>
                        <p className='about__country'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" /></svg>
                            Soy de Argentina.
                        </p>
                    </li>
                    {/* <li><p className='about__experience'>Proximamente</p></li> */}
                    <li>
                        <p className='about__Enthusiasm'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Z" /></svg>
                            Me encantan los retos de codigo y electronica.
                        </p>
                    </li>
                    <li>
                        <p className='about__hobbies'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260ZM312-520l44-42 42 42 42-42-84-86-86 86 42 42Zm250 0 42-42 44 42 42-42-86-86-84 86 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /></svg>
                            La mayor parte de mi tiempo libre es destinado a aprender, crear, repdarar electronica y codigo.
                        </p>
                    </li>
                </ul>
                <h2 className='about__title about__title--skills'>Habilidades en programacion</h2>
                <div className='about__skills__container'>
                    {/* arduino */}
                    <svg width="24px" height="24px" viewBox="0 -41 256 256" ><g fill="#00979C" ><path d="M14.044,130.399 L0.919,173.242 L11.247,173.242 L13.616,165.259 L26.419,165.259 L28.724,173.242 L39.955,173.242 L26.831,130.399 L14.044,130.399 L14.044,130.399 Z M16.21,156.641 L20.109,143.316 L23.964,156.641 L16.21,156.641 L16.21,156.641 Z"></path><path d="M64.632,153.696 C64.477,153.53 64.319,153.373 64.158,153.226 C64.481,153.104 64.796,152.974 65.104,152.832 C66.354,152.258 67.449,151.489 68.359,150.552 C69.279,149.606 70.002,148.466 70.507,147.163 C71.007,145.876 71.261,144.397 71.261,142.77 C71.261,140.527 70.856,138.587 70.06,137.002 C69.255,135.399 68.09,134.079 66.599,133.078 C65.152,132.108 63.392,131.407 61.367,130.996 C59.421,130.601 57.229,130.399 54.854,130.399 L41.456,130.399 L41.456,173.242 L51.731,173.242 L51.731,156.502 L52.036,156.502 C53.16,156.502 54.097,156.749 54.9,157.259 C55.697,157.764 56.308,158.509 56.771,159.541 L62.981,173.242 L74.936,173.242 L67.391,157.959 C66.477,156.103 65.574,154.71 64.632,153.696 L64.632,153.696 Z M60.163,145.477 C59.866,146.043 59.454,146.507 58.903,146.895 C58.322,147.303 57.601,147.616 56.757,147.826 C55.866,148.049 54.849,148.161 53.733,148.161 L51.731,148.161 L51.731,139.142 L53.989,139.142 C56.341,139.142 58.089,139.511 59.184,140.24 C60.138,140.875 60.602,141.945 60.602,143.513 C60.602,144.271 60.458,144.914 60.163,145.477 L60.163,145.477 Z"></path><path d="M105.04,135.487 C103.31,133.748 101.128,132.446 98.555,131.619 C96.047,130.81 93.095,130.399 89.782,130.399 L76.193,130.399 L76.193,173.242 L88.022,173.242 C91.839,173.242 95.178,172.722 97.945,171.697 C100.755,170.658 103.102,169.15 104.919,167.216 C106.733,165.286 108.085,162.928 108.935,160.209 C109.769,157.547 110.191,154.553 110.191,151.31 C110.191,147.775 109.768,144.674 108.932,142.093 C108.078,139.449 106.769,137.227 105.04,135.487 L105.04,135.487 Z M96.639,161.524 C94.855,163.506 92.267,164.469 88.727,164.469 L86.467,164.469 L86.467,139.172 L89.27,139.172 C91.251,139.172 92.914,139.452 94.211,140.005 C95.469,140.54 96.442,141.296 97.186,142.314 C97.946,143.358 98.497,144.668 98.823,146.205 C99.166,147.831 99.341,149.715 99.341,151.805 C99.341,156.263 98.432,159.533 96.639,161.524 L96.639,161.524 Z"></path><path d="M134.942,157.654 C134.942,159.131 134.806,160.39 134.535,161.396 C134.283,162.335 133.912,163.102 133.43,163.675 C132.968,164.226 132.403,164.615 131.704,164.864 C130.943,165.136 129.97,165.273 128.81,165.273 C127.583,165.273 126.571,165.116 125.802,164.805 C125.063,164.505 124.469,164.076 123.985,163.495 C123.499,162.91 123.151,162.176 122.95,161.31 C122.726,160.354 122.613,159.229 122.613,157.963 L122.613,130.399 L112.339,130.399 L112.339,158.427 C112.339,160.743 112.626,162.869 113.19,164.745 C113.777,166.694 114.745,168.379 116.068,169.75 C117.391,171.12 119.123,172.18 121.216,172.897 C123.25,173.598 125.708,173.953 128.521,173.953 C131.036,173.953 133.344,173.598 135.378,172.897 C137.458,172.184 139.251,171.103 140.708,169.683 C142.166,168.261 143.297,166.471 144.07,164.363 C144.83,162.293 145.216,159.869 145.216,157.158 L145.216,130.399 L134.942,130.399 L134.942,157.654"></path><path d="M150.47,139.018 L159.69,139.018 L159.69,164.562 L150.47,164.562 L150.47,173.242 L179.313,173.242 L179.313,164.562 L170.093,164.562 L170.093,139.018 L179.313,139.018 L179.313,130.399 L150.47,130.399 L150.47,139.018"></path><path d="M207.905,154.811 L196.419,130.399 L184.79,130.399 L184.79,173.242 L194.359,173.242 L194.359,148.366 L205.906,173.242 L217.476,173.242 L217.476,130.399 L207.905,130.399 L207.905,154.811"></path><path d="M250.738,135.468 C247.738,131.653 243.241,129.719 237.374,129.719 C234.864,129.719 232.47,130.164 230.258,131.041 C228.015,131.93 226.033,133.314 224.366,135.158 C222.714,136.986 221.402,139.337 220.469,142.144 C219.546,144.915 219.078,148.238 219.078,152.022 C219.078,159.012 220.565,164.45 223.497,168.188 C226.497,172.014 230.994,173.953 236.861,173.953 C239.372,173.953 241.768,173.508 243.98,172.631 C246.224,171.741 248.205,170.356 249.87,168.515 C251.52,166.688 252.832,164.338 253.768,161.529 C254.689,158.759 255.157,155.436 255.157,151.65 C255.157,144.64 253.67,139.195 250.738,135.468 L250.738,135.468 Z M243.976,157.729 C243.682,159.31 243.223,160.643 242.612,161.692 C242.032,162.691 241.314,163.423 240.419,163.928 C239.527,164.431 238.416,164.686 237.118,164.686 C234.55,164.686 232.76,163.73 231.646,161.765 C230.422,159.606 229.801,156.204 229.801,151.65 C229.801,149.512 229.955,147.591 230.261,145.944 C230.555,144.366 231.017,143.035 231.637,141.986 C232.227,140.983 232.947,140.249 233.838,139.742 C234.717,139.241 235.82,138.987 237.118,138.987 C239.706,138.987 241.501,139.941 242.604,141.903 C243.819,144.063 244.435,147.468 244.435,152.022 C244.435,154.166 244.281,156.086 243.976,157.729 L243.976,157.729 Z"></path><path d="M190.275,120.327 C173.987,120.327 160.061,114.835 147.805,103.602 C140.234,96.665 133.992,88.166 128.249,79.329 C122.507,88.166 116.264,96.665 108.694,103.602 C95.525,115.671 80.427,121.113 62.545,120.236 C28.444,120.088 0.747,93.176 0.747,60.118 C0.747,26.969 28.596,0 62.827,0 C81.559,0 97.33,6.199 111.037,18.95 C117.621,25.075 123.179,32.18 128.249,39.614 C133.319,32.18 138.878,25.075 145.461,18.95 C159.168,6.199 174.939,0 193.671,0 C227.903,0 255.751,26.969 255.751,60.118 C255.751,93.176 228.055,120.088 193.953,120.236 C192.714,120.297 191.487,120.327 190.275,120.327 L190.275,120.327 Z M140.72,59.316 C147.514,70.339 154.108,80.599 162.14,87.959 C171.206,96.268 180.762,99.686 193.115,99.033 L193.671,99.018 C216.202,99.018 234.533,81.568 234.533,60.118 C234.533,38.669 216.202,21.218 193.671,21.218 C180.37,21.218 169.643,25.434 159.913,34.485 C152.646,41.246 146.646,49.908 140.72,59.316 L140.72,59.316 Z M62.827,21.218 C40.296,21.218 21.965,38.669 21.965,60.118 C21.965,81.568 40.296,99.018 62.827,99.018 L63.384,99.033 C75.738,99.686 85.292,96.268 94.358,87.959 C102.39,80.599 108.985,70.339 115.778,59.316 C109.852,49.908 103.852,41.246 96.586,34.485 C86.855,25.434 76.128,21.218 62.827,21.218 L62.827,21.218 Z"></path><path d="M196.477,52.407 L196.477,40.901 L184.501,40.901 L184.501,52.407 L172.996,52.407 L172.996,64.325 L184.501,64.325 L184.501,75.916 L196.477,75.916 L196.477,64.325 L207.983,64.325 L207.983,52.407 L196.477,52.407"></path><path d="M45.599,52.263 L83.416,52.263 L83.416,64.555 L45.599,64.555 L45.599,52.263 Z"></path></g></svg>
                    {/* css3 */}
                    <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" /> </g></svg>
                    {/* html */}
                    <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" /> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white" /> </g></svg>
                    {/* js */}
                    <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" /><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" fill="#FFCA28" /> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" /> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" /> </g></svg>
                    {/* linux */}
                    <svg width="800px" height="800px" viewBox="-19.5 0 295 295" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" /><g id="SVGRepo_iconCarrier"> <defs> <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1"> <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"> </feOffset> <feGaussianBlur stdDeviation="6.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"> </feGaussianBlur> </filter> <linearGradient x1="48.5477412%" y1="115.276174%" x2="51.0473804%" y2="41.3637237%" id="linearGradient-2"> <stop stop-color="#FFEED7" offset="0%"> </stop> <stop stop-color="#BDBFC2" offset="100%"> </stop> </linearGradient> <linearGradient x1="54.4065463%" y1="2.40410545%" x2="46.1753957%" y2="90.5422349%" id="linearGradient-3"> <stop stop-color="#FFFFFF" stop-opacity="0.8" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="51.859653%" y1="88.2477484%" x2="47.9469396%" y2="9.74782136%" id="linearGradient-4"> <stop stop-color="#FFEED7" offset="0%"> </stop> <stop stop-color="#BDBFC2" offset="100%"> </stop> </linearGradient> <linearGradient x1="49.9251097%" y1="85.4900173%" x2="49.9236843%" y2="13.8109272%" id="linearGradient-5"> <stop stop-color="#FFEED7" offset="0%"> </stop> <stop stop-color="#BDBFC2" offset="100%"> </stop> </linearGradient> <linearGradient x1="53.9014071%" y1="3.10177585%" x2="45.9555354%" y2="93.8949571%" id="linearGradient-6"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="45.5928761%" y1="5.47459052%" x2="54.811359%" y2="93.5235162%" id="linearGradient-7"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="49.9844987%" y1="89.8452442%" x2="49.9844987%" y2="40.6316864%" id="linearGradient-8"> <stop stop-color="#FFEED7" offset="0%"> </stop> <stop stop-color="#BDBFC2" offset="100%"> </stop> </linearGradient> <linearGradient x1="53.5047131%" y1="99.97524%" x2="42.7455968%" y2="23.5451715%" id="linearGradient-9"> <stop stop-color="#FFEED7" offset="0%"> </stop> <stop stop-color="#BDBFC2" offset="100%"> </stop> </linearGradient> <linearGradient x1="49.8413363%" y1="13.2289558%" x2="50.2412612%" y2="94.6729694%" id="linearGradient-10"> <stop stop-color="#FFFFFF" stop-opacity="0.8" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="49.9272298%" y1="37.3270337%" x2="50.7270446%" y2="92.7824735%" id="linearGradient-11"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="49.8755597%" y1="2.29900584%" x2="49.8755597%" y2="81.203617%" id="linearGradient-12"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="49.8334391%" y1="2.27189065%" x2="49.8240398%" y2="71.7989617%" id="linearGradient-13"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="53.4670683%" y1="48.9213861%" x2="38.9488708%" y2="98.0999776%" id="linearGradient-14"> <stop stop-color="#FFA63F" offset="0%"> </stop> <stop stop-color="#FFFF00" offset="100%"> </stop> </linearGradient> <linearGradient x1="52.3731508%" y1="143.008909%" x2="47.57909%" y2="-64.6215389%" id="linearGradient-15"> <stop stop-color="#FFEED7" offset="0%"> </stop> <stop stop-color="#BDBFC2" offset="100%"> </stop> </linearGradient> <linearGradient x1="30.580815%" y1="34.0241079%" x2="65.8867024%" y2="89.175349%" id="linearGradient-16"> <stop stop-color="#FFA63F" offset="0%"> </stop> <stop stop-color="#FFFF00" offset="100%"> </stop> </linearGradient> <linearGradient x1="59.5715091%" y1="-17.2155207%" x2="48.3608522%" y2="66.1184465%" id="linearGradient-17"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="47.7689553%" y1="1.56481301%" x2="51.3733028%" y2="104.312856%" id="linearGradient-18"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="43.5495626%" y1="4.5334861%" x2="57.1143288%" y2="92.8267174%" id="linearGradient-19"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> <linearGradient x1="49.7328042%" y1="17.6085216%" x2="50.5582487%" y2="99.3854667%" id="linearGradient-20"> <stop stop-color="#FFA63F" offset="0%"> </stop> <stop stop-color="#FFFF00" offset="100%"> </stop> </linearGradient> <linearGradient x1="50.1697217%" y1="2.89048531%" x2="49.6802359%" y2="94.1704279%" id="linearGradient-21"> <stop stop-color="#FFFFFF" stop-opacity="0.65" offset="0%"> </stop> <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop> </linearGradient> </defs> <g fill="none"> <g transform="translate(10.000000, 0.000000)"> <path d="M235.125423,249.358628 C235.125423,266.714271 182.507524,280.855905 117.584567,280.855905 C52.6616093,280.855905 0.0437105058,266.806099 0.0437105058,249.358628 L0.0437105058,249.358628 C0.0437105058,232.002986 52.6616093,217.861352 117.584567,217.861352 C182.507524,217.861352 235.033594,232.002986 235.125423,249.358628 L235.125423,249.358628 L235.125423,249.358628 Z" fill="#000000" fill-opacity="0.2" filter="url(#filter-1)"> </path> <path d="M53.2125821,215.473804 C41.8258117,199.128278 39.6219206,145.867578 66.160442,113.084699 C79.2919595,97.3819748 82.6896249,86.4543483 83.6997416,71.6699125 C84.434372,54.8652433 71.8538272,4.81855066 119.237485,1.05357012 C167.263944,-2.80323922 164.600909,44.5804184 164.325423,69.6496791 C164.141765,90.7703016 179.844489,102.799874 190.680286,119.329056 C210.607135,149.632558 208.954216,201.791313 186.915306,230.074582 C158.999353,265.428667 135.123866,250.093259 119.237485,251.378862 C89.4849556,253.123609 88.4748389,268.918162 53.2125821,215.473804 L53.2125821,215.473804 Z" fill="#000000"> </path> <path d="M169.10052,122.451235 C177.365111,130.073025 198.76122,164.141508 164.876395,185.445788 C152.938652,192.88392 175.528535,221.167189 186.364333,207.484699 C205.556551,182.874582 193.343321,143.571858 181.772893,129.522053 C174.059275,119.604543 162.121532,115.747734 169.10052,122.451235 L169.10052,122.451235 Z" fill="url(#linearGradient-2)"> </path> <path d="M166.8048,117.859796 C180.395461,128.879251 205.097407,167.447344 169.008691,192.608434 C157.162777,200.413881 179.477174,225.115827 192.057718,212.535282 C235.676395,168.641119 190.955773,118.227111 175.528535,100.871469 C161.754216,85.719718 149.540987,104.360963 166.8048,117.859796 L166.8048,117.859796 Z" stroke="#000000" stroke-width="0.9773" fill="#000000"> </path> <path d="M147.245267,25.0208853 C146.786123,37.60143 132.919975,48.5290565 116.298963,49.5391732 C99.6779518,50.54929 86.638263,40.9990954 87.097407,28.4185507 L87.097407,28.4185507 C87.556551,15.8380059 101.422699,4.91037946 118.043711,3.90026272 C134.664722,2.98197479 147.704411,12.4403405 147.245267,25.0208853 L147.245267,25.0208853 L147.245267,25.0208853 Z" fill="url(#linearGradient-3)"> </path> <path d="M107.483399,54.9570721 C107.942543,63.1298347 104.085734,70.0169942 98.7596638,70.2924806 C93.4335938,70.567967 88.7503253,64.2317802 88.2911813,56.0590176 L88.2911813,56.0590176 C87.8320374,47.8862549 91.6888467,40.9990954 97.0149167,40.723609 C102.340987,40.4481226 107.024255,46.7843094 107.483399,54.9570721 L107.483399,54.9570721 L107.483399,54.9570721 Z" fill="url(#linearGradient-4)"> </path> <path d="M117.125423,55.5998736 C117.30908,65.0582394 123.461609,72.5882005 130.807913,72.4045429 C138.154216,72.2208853 143.93943,64.4154378 143.755773,54.8652433 L143.755773,54.8652433 C143.572115,45.4068775 137.419586,37.8769164 130.073282,38.060574 C122.726979,38.2442316 116.849936,46.1415079 117.125423,55.5998736 L117.125423,55.5998736 L117.125423,55.5998736 Z" fill="url(#linearGradient-5)"> </path> <path d="M123.186123,57.7119359 C123.094294,62.9461771 125.6655,67.1703016 129.063166,67.1703016 C132.369002,67.1703016 135.215695,62.9461771 135.307524,57.8037647 L135.307524,57.8037647 C135.399353,52.5695234 132.828146,48.3453989 129.430481,48.3453989 C126.032816,48.3453989 123.277952,52.5695234 123.186123,57.7119359 L123.186123,57.7119359 L123.186123,57.7119359 Z" fill="#000000"> </path> <path d="M101.973672,57.8037647 C102.432816,62.119718 100.779897,65.7928697 98.3923486,66.1601849 C96.0048,66.4356713 93.7090802,63.2216635 93.2499362,58.9057102 L93.2499362,58.9057102 C92.7907922,54.5897569 94.4437105,50.9166051 96.8312591,50.54929 C99.2188078,50.2738036 101.514528,53.4878114 101.973672,57.8037647 L101.973672,57.8037647 L101.973672,57.8037647 Z" fill="#000000"> </path> <path d="M124.563555,54.7734145 C124.288068,57.7119359 125.6655,60.0994845 127.593905,60.2831421 C129.52231,60.4667997 131.358886,58.1710798 131.634372,55.3243872 L131.634372,55.3243872 C131.909858,52.3858658 130.532426,49.9983172 128.604022,49.8146596 C126.675617,49.631002 124.839041,51.9267219 124.563555,54.7734145 L124.563555,54.7734145 L124.563555,54.7734145 Z" fill="url(#linearGradient-6)"> </path> <path d="M99.9534381,55.5080448 C100.228925,57.8955935 99.2188078,60.0076557 97.7495471,60.1913133 C96.2802864,60.3749709 94.9028545,58.538395 94.6273681,56.0590176 L94.6273681,56.0590176 C94.3518817,53.6714689 95.3619984,51.5594067 96.8312591,51.3757491 C98.3005198,51.1920915 99.6779518,53.1204962 99.9534381,55.5080448 L99.9534381,55.5080448 L99.9534381,55.5080448 Z" fill="url(#linearGradient-7)"> </path> <path d="M71.0273681,145.68392 C77.5472125,130.899485 91.4133603,104.911936 91.6888467,84.80143 C91.6888467,68.8232199 139.531648,64.9664106 143.388458,80.9446207 C147.245267,96.9228308 156.979119,120.798317 163.223477,132.368745 C169.467835,143.847344 187.558107,180.487033 168.274061,212.443453 C150.918419,240.726722 98.3005198,263.132948 70.2009089,208.586644 C60.6507144,189.669913 62.3954615,166.25357 71.0273681,145.68392 L71.0273681,145.68392 Z" fill="url(#linearGradient-8)"> </path> <path d="M65.1503253,134.664465 C59.5487689,145.224776 47.9783409,172.957072 76.2616093,188.108823 C106.65694,204.270691 106.565111,237.420885 70.0172514,221.626333 C36.5915704,207.39287 51.3760062,149.724387 60.7425432,135.950068 C66.8032436,126.308045 75.986123,114.46213 65.1503253,134.664465 L65.1503253,134.664465 Z" fill="url(#linearGradient-9)"> </path> <path d="M69.9254226,122.726722 C61.0180296,137.235671 39.7137494,171.395983 68.2725043,189.210769 C106.65694,212.810769 95.8211424,236.31894 60.7425432,215.106488 C11.3386521,185.537617 54.7736716,125.848901 74.5168623,103.07536 C97.1067455,77.5469553 78.8328156,107.758628 69.9254226,122.726722 L69.9254226,122.726722 Z" stroke="#000000" stroke-width="1.25" fill="#000000"> </path> <path d="M156.428146,151.285477 C156.428146,167.447344 140.90908,188.384309 114.27873,188.200652 C86.8219206,188.384309 75.1596638,167.447344 75.1596638,151.285477 C75.1596638,135.123609 93.341765,121.992092 115.747991,121.992092 C138.246045,122.08392 156.428146,135.123609 156.428146,151.285477 L156.428146,151.285477 Z" fill="url(#linearGradient-10)"> </path> <path d="M141.919197,100.504154 C141.643711,117.216994 130.716084,121.165632 116.941765,121.165632 C103.167446,121.165632 93.1581074,118.686255 91.9643331,100.504154 C91.9643331,89.1173833 103.167446,82.5057102 116.941765,82.5057102 C130.716084,82.4138814 141.919197,89.0255546 141.919197,100.504154 L141.919197,100.504154 Z" fill="url(#linearGradient-11)"> </path> <path d="M58.6304809,126.216216 C67.6297027,112.533726 86.638263,91.504932 62.2118039,129.154737 C42.3767844,160.19287 54.8655004,180.119718 61.293516,185.629446 C79.8429323,202.158628 79.1083019,213.269913 64.5075237,204.546177 C33.1939051,185.904932 39.7137494,154.499485 58.6304809,126.216216 L58.6304809,126.216216 Z" fill="url(#linearGradient-12)"> </path> <path d="M188.935539,131.817772 C181.130092,115.747734 156.336318,74.9757491 190.129314,122.359407 C220.89196,165.243453 199.312193,195.087811 195.455384,198.026333 C191.598574,200.964854 178.650714,206.933726 182.415695,196.557072 C186.272504,186.180418 205.372893,166.529056 188.935539,131.817772 L188.935539,131.817772 Z" fill="url(#linearGradient-13)"> </path> <path d="M51.8351502,258.541508 C31.2655004,247.613881 1.42114241,260.65357 12.2569401,231.084699 C14.4608311,224.381197 9.0429323,214.280029 12.5324265,207.760185 C16.6647222,199.77108 25.5721152,201.515827 30.8981852,196.189757 C36.1324265,190.680029 39.438263,181.129835 49.263944,182.599095 C58.9977961,184.068356 65.5176405,196.006099 72.3129712,210.698706 C77.3635549,221.167189 95.1783409,235.951625 93.9845665,247.70571 C92.5153058,265.704154 72.0374848,269.101819 51.8351502,258.541508 L51.8351502,258.541508 Z" stroke="#E68C3F" stroke-width="6.25" fill="url(#linearGradient-14)"> </path> <path d="M201.607913,189.11894 C198.485734,194.995983 185.446045,204.454348 176.72231,201.974971 C167.906746,199.587422 163.866279,186.180418 165.611026,175.987422 C167.263944,164.600652 176.72231,163.95785 188.660053,169.651235 C201.516084,175.987422 205.372893,181.313492 201.607913,189.11894 L201.607913,189.11894 Z" fill="url(#linearGradient-15)"> </path> <path d="M194.445267,253.490924 C209.505189,235.216994 243.022699,238.981975 220.432816,213.912714 C215.657718,208.494815 217.126979,196.924387 211.249936,191.965632 C204.362777,185.904932 196.740987,190.863687 189.761998,187.741508 C182.78301,184.343842 175.436707,177.823998 166.896629,182.415438 C158.356551,187.098706 157.438263,199.220107 156.611804,215.198317 C155.877174,226.676916 145.408691,245.869134 151.010247,256.429446 C159.091181,272.774971 180.119975,270.57108 194.445267,253.490924 L194.445267,253.490924 Z" stroke="#E68C3F" stroke-width="6.2507" fill="url(#linearGradient-16)"> </path> <path d="M187.925423,229.064465 C211.249936,194.628667 193.894294,194.904154 188.017251,192.241119 C182.140209,189.486255 175.987679,184.068356 169.10052,187.833337 C162.21336,191.690146 161.846045,201.607656 161.662388,214.647344 C161.386901,224.013881 153.581454,239.716605 158.264722,248.440341 C163.958107,258.633337 177.732426,243.848901 187.925423,229.064465 L187.925423,229.064465 Z" fill="url(#linearGradient-17)"> </path> <path d="M47.0600529,234.02322 C12.1651113,211.433337 28.5106366,203.719718 33.7448778,200.138395 C40.0810646,195.546955 40.1728934,186.731391 47.9783409,187.55785 C55.7837883,188.384309 60.375228,198.026333 65.6094693,209.964076 C69.4662786,218.504154 82.8732825,229.890924 81.8631658,239.716605 C80.5775626,251.287033 62.1199751,243.665243 47.0600529,234.02322 L47.0600529,234.02322 Z" fill="url(#linearGradient-18)"> </path> <path d="M199.587679,188.843453 C196.832816,193.618551 185.629703,201.148512 178.19157,199.128278 C170.569781,197.199874 167.080286,186.455905 168.641376,178.374971 C170.018808,169.192092 178.19157,168.732948 188.476395,173.324387 C199.404022,178.283142 202.801687,182.507267 199.587679,188.843453 L199.587679,188.843453 Z" fill="#000000"> </path> <path d="M192.057718,186.180418 C190.312971,189.486255 182.966668,194.720496 177.824255,193.343064 C172.681843,191.965632 170.110637,184.5275 170.937096,178.925944 C171.671726,172.589757 177.181454,172.222442 184.160442,175.344621 C191.690403,178.834115 194.077952,181.772636 192.057718,186.180418 L192.057718,186.180418 Z" fill="url(#linearGradient-19)"> </path> <path d="M97.1067455,66.3438425 C100.779897,62.9461771 109.68729,52.5695234 126.583788,63.4053211 C129.705967,65.4255546 132.277174,65.6092121 138.246045,68.1804184 C150.275617,73.1391732 144.582232,85.0769164 131.726201,89.1173833 C126.216473,90.8621304 121.257718,97.5656324 111.340209,96.9228308 C102.800131,96.4636868 100.59624,90.8621304 95.3619984,87.8317802 C86.0872903,82.597539 84.7098584,75.5267219 89.760442,71.7617413 C94.8110257,67.9967608 96.7394304,66.6193289 97.1067455,66.3438425 L97.1067455,66.3438425 Z" stroke="#E68C3F" stroke-width="3.75" fill="url(#linearGradient-20)"> </path> <path d="M138.429703,75.9858658 C133.379119,76.2613522 122.451493,87.1889787 110.972893,87.1889787 C99.4942942,87.1889787 92.6071346,76.5368386 90.8623875,76.5368386" stroke="#E68C3F" stroke-width="2.5"> </path> <path d="M102.800131,65.4255546 C104.636707,63.7726363 110.421921,59.2730254 118.043711,63.8644651 C119.696629,64.782753 121.349547,65.7928697 123.737096,67.1703016 C128.604022,70.0169942 126.216473,74.14929 120.33943,76.7204962 C117.676395,77.8224417 113.268613,80.2099904 109.962777,80.0263328 C106.289625,79.6590176 103.810247,77.2714689 101.422699,75.7103795 C96.9230879,72.7718581 97.1985743,70.2924806 99.3106366,68.364076 C100.871726,66.8948153 102.616473,65.5173833 102.800131,65.4255546 L102.800131,65.4255546 Z" fill="url(#linearGradient-21)"> </path> </g> </g> </g></svg>
                    {/* nextjs */}
                    <svg  className='nextjs--img' aria-labelledby="next-logo-title" fill="none" height="80" role="img" viewBox="0 0 80 80" width="80" xmlns="http://www.w3.org/2000/svg"><title id="next-logo-title">The brand mark for Next.js</title><path d="M66.4478 70.0092L30.7296 24H23.9998V55.9867H29.3836V30.8372L62.2216 73.2645C63.7033 72.2728 65.1149 71.1847 66.4478 70.0092Z" fill="url(#paint0_linear_4_275)"></path><path d="M56.4444 24H51.1111V56H56.4444V24Z" fill="url(#paint1_linear_4_275)"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_275" x1="48.4443" x2="64.2219" y1="51.7778" y2="71.3333"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4_275" x1="53.7778" x2="53.6886" y1="24" y2="47.5002"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>
                    {/* react */}
                    <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/></svg>
                    {/* webpack */}
                    <svg width="800px" height="800px" viewBox="-17 0 290 290" version="1.1"><g><polygon fill="#FFFFFF" points="128 0.0483018868 256 72.4528302 256 217.310189 128 289.714717 0 217.310189 0 72.4528302"></polygon><path d="M233.153208,212.286792 L132.250566,269.427925 L132.250566,224.990189 L195.139623,190.357736 L233.153208,212.286792 Z M240.060377,206.055849 L240.060377,86.6535849 L203.157736,107.954717 L203.157736,184.754717 L240.060377,206.055849 Z M22.4603774,212.286792 L123.363019,269.379623 L123.363019,224.941887 L60.4739623,190.357736 L22.4603774,212.286792 L22.4603774,212.286792 Z M15.5532075,206.055849 L15.5532075,86.6535849 L52.4558491,107.954717 L52.4558491,184.754717 L15.5532075,206.055849 L15.5532075,206.055849 Z M19.8520755,78.925283 L123.363019,20.3833962 L123.363019,63.3720755 L57.0445283,99.84 L56.5132075,100.129811 L19.8520755,78.925283 L19.8520755,78.925283 Z M235.713208,78.925283 L132.250566,20.3833962 L132.250566,63.3720755 L198.520755,99.8883019 L199.052075,100.178113 L235.713208,78.925283 L235.713208,78.925283 Z" fill="#8ED6FB"></path><path d="M123.363019,214.846792 L61.3433962,180.697358 L61.3433962,113.123019 L123.363019,148.914717 L123.363019,214.846792 L123.363019,214.846792 Z M132.250566,214.846792 L194.270189,180.74566 L194.270189,113.123019 L132.250566,148.914717 L132.250566,214.846792 Z M65.4973585,105.298113 L127.806792,71.0520755 L190.067925,105.298113 L127.806792,141.234717 L65.4973585,105.298113 L65.4973585,105.298113 Z" fill="#1C78C0"></path></g></svg>
                    {/* github */}
                    <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
                </div>
            </div>
        </section>
    )
}

export default AboutSection