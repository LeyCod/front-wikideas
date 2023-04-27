import React from 'react'


export const CreatePopUp = ({ show, onClose, create }) => {
    if (!show) return null;



    return (
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-title bg-opacity-80  z-10 '></div>
            <div className='flex flex-col items-center justify-start p-4 rounded w-[500px] h-[200px] bg-selected text-title relative z-20 translate-y-50 -top-[50%] left-[20%] right-[20%] '>
                <div className='p-4 text-center font-bold'>
                    <span>¿Estás seguro que quieres publicar este artículo?
                        <br />
                        <span>Una vez publicado
                            no podrás modificar su título.</span>
                    </span>
                </div>

                <div className='flex flex-row gap-10 items-center mt-6'>
                    <button
                        onClick={onClose}
                        className='text-alternative font-bold hover:bg-alternative hover:text-selected p-1 rounded'>Volver</button>
                    <button
                        onClick={create}
                        className='bg-buttons text-selected p-1 rounded hover:bg-buttons hover:bg-opacity-80'
                    >Crear Artículo</button>
                </div>

            </div>
        </>
    )
}
