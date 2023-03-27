import React from 'react'
import { BiBold, BiItalic, BiUnderline, BiStrikethrough, BiListUl } from 'react-icons/bi'
import { HiCodeBracket } from 'react-icons/hi2'
// import { HiOutlineCodeBracket } from 'react-icons/hi'
import { RiDoubleQuotesL } from 'react-icons/ri'

export const CreateArticle = () => {
    return (
        <div className='flex flex-col w-full p-4 justify-center items-start '>
            <h1 className='text-subtitleSize' >Editar Artículo</h1>

            <h3 className='text-titleSize mt-6'>Título</h3>
            <div className='flex flex-row  items-center md:items-start  w-full '>
                <input
                    className='rounded shadow-md mt-2 shadow-title w-full md:w-[100%] h-10 p-2' type="text" placeholder="¿Que estás buscando?" ></input>

            </div>

            <div className='flex flex-col mt-6'>
                <h3 className='text-subtitleSize'>Contenido</h3>
                <div className='flex flex-row gap-4 items-center  text-subtitle mt-4'>
                    <BiBold size={18} />
                    <BiItalic size={18} />
                    <BiUnderline size={18} />
                    <BiStrikethrough size={18} />
                    <BiListUl size={18} />
                    <RiDoubleQuotesL size={18} />
                    <HiCodeBracket size={18} />
                </div>
            </div>

            <div className='h-auto flex items-start w-[800px] mt-6'>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus, iusto incidunt dicta sunt quos repudiandae illum nesciunt culpa modi, earum deleniti? Nostrum facilis itaque libero at et odio sint.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus, iusto incidunt dicta sunt quos repudiandae illum nesciunt culpa modi, earum deleniti? Nostrum facilis itaque libero at et odio sint.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus, iusto incidunt dicta sunt quos repudiandae illum nesciunt culpa modi, earum deleniti? Nostrum facilis itaque libero at et odio sint.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus, iusto incidunt dicta sunt quos repudiandae illum nesciunt culpa modi, earum deleniti? Nostrum facilis itaque libero at et odio sint.
                </span>


            </div>
            <button className='bg-buttons text-selected p-1 rounded mt-4'>Editar Artículo</button>

        </div>
    )
}
