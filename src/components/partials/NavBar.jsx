import React from 'react'
import logo from '../../assets/images/TOT-icon.png'
import {
    AiOutlineMenu, AiOutlineClose, AiOutlineEdit,
    AiOutlineHome, AiOutlineBell, AiOutlineEye, AiOutlineTeam
} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
    const [active, setActive] = useState(true)

    const handleSetNav = () => {
        setActive(!active);
    }

    const onCloseNav = () => {
        setActive(true)
    }

    return (
        <div className=' w-[20%] h-[100%]    flex flex-row md:flex-col items-center justify-start    '>

            <div className='flex flex-col items-center p-6 mb-6 '>
                <img className='mt-4 w-[50px] md:w-[100px]' src={logo}  ></img>
                <h1 className='text-title text-subtitleSize md:text-titleSize font-bold -m-2'>TOT</h1>
                <p className='text-smallText text-alternative hidden md:flex font-bold'>10.152 artículos</p>
            </div>


            <ul className='hidden md:flex flex-col'>

                <div className='flex flex-col gap-6 mt-8'>
                    <Link to="create" className='flex flex-row gap-2 place-items-center text-alternative hover:text-nabvar-active text-cardsSize '>
                        <AiOutlineEdit size={20} className='text-title' />
                        <p className='text-alternative'>Crear artículo</p>
                    </Link>
                    <hr className='text-subtitle opacity-25' />
                    <Link to="/" className='flex flex-row gap-2 place-items-center  hover:text-nabvar-active '>
                        <AiOutlineHome size={20} />
                        <p >Inicio</p>
                    </Link>
                    <Link to="last" className='flex flex-row gap-2 place-items-center  hover:text-nabvar-active '>
                        <AiOutlineBell size={20} />
                        <p>Últimos ingresos</p>
                    </Link>
                    <Link to="visited" className='flex flex-row gap-2 place-items-center  hover:text-nabvar-active '>
                        <AiOutlineEye size={20} />
                        <p>Más visitados</p>
                    </Link>
                    <Link to="about" className='flex flex-row gap-2 place-items-center  hover:text-nabvar-active '>
                        <AiOutlineTeam size={20} />
                        <p>Nosotros</p>
                    </Link>

                </div>
            </ul>

            <div onClick={handleSetNav} className='block md:hidden '>
                {

                    !active ? <></> : <AiOutlineMenu size={24} className=" absolute right-5 " />
                }
            </div>


            <div className={!active ? 'absolute left-0 top-0 w-[60%] h-[450px]  border-r-subtitle bg-cards ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='flex flex-col items-center '>
                    <div className='flex flex-col items-center'>
                        <img className='mt-4' src={logo} width={80}></img>
                        <h1 className='text-selected text-titleSize font-bold '>TOT</h1>
                        <p className='text-smallText text-alternative'>10.152 artículos</p>
                    </div>


                    <div className='flex flex-col items-start'>
                        <Link to="create" className='flex flex-row gap-2 items-center mt-6  text-alternative hover:text-nabvar-active text-cardsSize '>
                            <AiOutlineEdit size={20} className='text-alternative' />
                            <p className='text-selected text-normalText'>Crear artículo</p>
                        </Link>

                        <Link to="/" className='flex flex-row gap-2 items-center mt-6  text-alternative hover:text-nabvar-active text-cardsSize'>
                            <AiOutlineHome size={20} className='text-alternative' />
                            <p className='text-selected text-normalText'>Inicio</p>
                        </Link>

                        <Link to="last" className='flex flex-row gap-2 items-center mt-6  text-alternative hover:text-nabvar-active text-cardsSize'>
                            <AiOutlineBell size={20} className='text-alternative' />
                            <p className='text-selected text-normalText'>Últimos ingresos</p>
                        </Link>

                        <Link to="visited" className='flex flex-row gap-2 items-center mt-6  text-alternative hover:text-nabvar-active text-cardsSize'>
                            <AiOutlineEye size={20} className='text-alternative' />
                            <p className='text-selected text-normalText'>Más visitados</p>
                        </Link>
                    </div>
                    <button className='mt-8 text-selected bg-alternative rounded p-1 ml-44 ' onClick={onCloseNav}><AiOutlineClose size={24} /></button>
                </div>
            </div>
        </div>

    )
}
