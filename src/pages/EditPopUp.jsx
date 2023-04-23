import React from 'react'

export const EditPopUp = () => {
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-title bg-opacity-80  z-10 '></div>
            <div className='p-4 rounded w-[500px] h-[200px] bg-selected text-title relative z-20 translate-y-50 -top-[50%] left-[20%] right-[20%] '>
                <button>X</button>
                <span>¿Estás seguro que quieres editar este artículo? Una vez publicado
                    no podrás modificar su título.
                </span>

                <div className='flex flex-row gap-2 items-center'>
                    <button className='text-alternative'>Volver</button>
                    <button className='bg-buttons text-selected'>Editar Artículo</button>
                </div>

            </div>
        </>
    )
}
