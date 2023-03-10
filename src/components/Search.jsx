import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


export const Search = () => {
    return (
        <>
            <div className='flex flex-col  p-4  items-start w-auto  '>
                <div className='flex flex-col  items-center md:items-start  w-full '>
                    <h1 className='text-titleSize font-semibold'>Wiki<span className='text-alternative font-semibold '>TOT</span></h1>
                    <p className='text-subtitle text-cardsSize text-start p-1  '>Somos una enciclopedia entendida como soporte que permite la recopilación, el<br className='hidden md:flex'></br>
                        almacenamiento y la transmisión de la información de  forma estructurada y de<br className='hidden md:flex'></br>
                        contenido abierto. ¿Te gustaría participar? comienza ahora crea un tema o explora <br className='hidden md:flex'>
                        </br>nuestro contenido</p>
                </div>

                <div className='flex flex-row  items-center md:items-start  w-full '>
                    <input className='rounded shadow-md mt-2 shadow-title w-full md:w-[100%] h-10 p-2' type="text" placeholder="¿Que estás buscando?" ></input>
                    <button className='bg-buttons text-selected rounded shadow-md mt-2 shadow-title h-10 p-2'><AiOutlineSearch size={20} /></button>
                </div>

            </div>
        </>
    )
}
