import React from 'react'
import logo from '../assets/images/TOT-icon.png'
import { AiOutlineMenu, AiOutlineEdit, AiOutlineHome, AiOutlineBell, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className=' w-[30%] h-[100%]  flex flex-col items-center justify-start   '>
            <nav>
                <div className='flex flex-col items-center'>
                    <img className='mt-4' src={logo} width={90}></img>
                    <h1 className='text-title text-titleSize font-bold -m-2'>TOT</h1>
                    <p className='text-smallText text-alternative'>10.152 artículos</p>
                </div>
                <div className='flex flex-col gap-6 mt-8'>
                    <Link to="create" className='flex flex-row gap-2 place-items-center text-alternative hover:text-nabvar-active text-cardsSize'>
                        <AiOutlineEdit size={20} className='text-title' />
                        <p className='text-alternative'>Crear artículo</p>
                    </Link>
                    <hr className='text-subtitle opacity-25' />
                    <Link to="/" className='flex flex-row gap-2 place-items-center  hover:text-nabvar-active'>
                        <AiOutlineHome size={20} />
                        <p >Inicio</p>
                    </Link>
                    <Link to="/" className='flex flex-row gap-2 place-items-center  hover:text-nabvar-active'>
                        <AiOutlineBell size={20} />
                        <p>Últimos ingresos</p>
                    </Link>
                    <Link to="/" className='flex flex-row gap-2 place-items-center  hover:text-nabvar-active'>
                        <AiOutlineEye size={20} />
                        <p>Más visitados</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
