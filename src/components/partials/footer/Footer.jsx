import React from 'react'

export const Footer = () => {

    return (
        <footer className="flex flex-col md:flex-row justify-center items-center bg-bg-footer text-selected md:h-24 p-5   ">
            {/* Links footer */}
            <div className='flex flex-col items-center justify-center'>
                <span>El contenido de este sitio web es solo para fines informativos y no constituye asesoramiento legal, financiero o médico.</span>
                <span className='font-bold mt-4'>Equipo de Wiki<span className='text-alternative'>TOT.</span></span>
            </div>

        </footer>
    )
}
