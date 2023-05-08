import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import about from '../assets/about-us.jpg'

export const AboutUs = () => {
    return (
        <>
            <h1 className='text-titleSize flex items-center justify-center'>Nuestro equipo</h1>
            <section className='flex flex-col w-full p-4 justify-center items-center md:items-start  '>

                <span className='text-subtitle text-cardsSize md:items-start items-center w-[400px] md:w-[800px]  text-start p-8 md:p-1  '>

                    Somos un equipo altamente capacitado y apasionado por la creación de <b>soluciones digitales de alta calidad</b>. Cada uno de nosotros aporta una habilidad única para lograr un proyecto excepcional.

                    Trabajamos juntos para diseñar y construir la mejor experiencia digital posible. Desde el proyecto hasta la implementación, nuestra prioridad es siempre la satisfacción del cliente.

                    Nuestro equipo está compuesto por expertos en distintas áreas, como <b>Project Management</b>, <b>Front-end</b> y <b>Back-end</b>, cada uno con habilidades y experiencia específicas para contribuir en cada fase del proyecto.

                    En resumen, estamos aquí para ayudarle a llevar su visión digital al siguiente nivel y hacer realidad sus objetivos en línea.
                </span>

                <ul className='grid grid-cols-1 md:grid-cols-3 m-auto mt-2 md:mt-8 gap-10 md:gap-20 text-start p-2  md:p-6'>
                    <li className='bg-subtitle bg-opacity-40 rounded text-title px-4 py-2'>
                        <h3 className='text-cardsSize text-subtitle'>Project Manager</h3>

                        <div className='flex flex-row justify-between items-center gap-6 mt-4 '>
                            <span className=' font-bold'>Carlos Aliano</span>
                            <a href="https://www.linkedin.com/in/carlos-aliano-7740255a/" target='__blank'>
                                <FaLinkedin size={24} className='bg-selected rounded text-buttons hover:-translate-y-1 ease-in-out' />
                            </a>
                        </div>
                    </li>


                    <li className='bg-subtitle bg-opacity-40 rounded text-title px-4 py-2 '>
                        <h3 className='text-cardsSize text-subtitle'>Front-end</h3>
                        <div className='flex flex-row justify-between gap-6 mt-4'>
                            <span className=' font-bold'>Leandro Sabus</span>
                            <a href="https://www.linkedin.com/in/leandro-sabus-a3873515a/" target='__blank'>
                                <FaLinkedin size={24} className='bg-selected rounded text-buttons hover:-translate-y-1 ease-in-out' />
                            </a>
                        </div>
                        <div className='flex flex-row justify-between gap-6 mt-2'>
                            <span className=' font-bold'>Antonela Duca</span>
                            <a href="https://www.linkedin.com/in/antonella-duca/" target='__blank'>
                                <FaLinkedin size={24} className='bg-selected rounded text-buttons hover:-translate-y-1 ease-in-out' />
                            </a>
                        </div>
                        <div className='flex flex-row justify-between gap-6 mt-2'>
                            <span className=' font-bold'>Emanuel Leyan</span>
                            <a href="https://www.linkedin.com/in/emmanuelleyan/" target='__blank'>
                                <FaLinkedin size={24} className='bg-selected rounded text-buttons hover:-translate-y-1 ease-in-out' />
                            </a>
                        </div>
                    </li>

                    <li className='bg-subtitle bg-opacity-40 rounded text-title px-4 py-2'>
                        <h3 className='text-cardsSize text-subtitle'>Back-end</h3>
                        <div className='flex flex-row justify-between gap-6 mt-4'>
                            <span className=' font-bold'>Alejandro Restucia</span>
                            <a href="https://www.linkedin.com/in/alejandrorestuccia/" target='__blank'>
                                <FaLinkedin size={24} className='bg-selected rounded text-buttons hover:-translate-y-1 ease-in-out' />
                            </a>
                        </div>
                        <div className='flex flex-row justify-between gap-6 mt-2'>
                            <span className=' font-bold'>Maximiliano Yanez</span>
                            <a href="https://www.linkedin.com/in/maxiyanezborghi/" target='__blank'>
                                <FaLinkedin size={24} className='bg-selected rounded text-buttons hover:-translate-y-1 ease-in-out ' />
                            </a>
                        </div>
                    </li>
                </ul>

            </section >
        </>
    )
}
