import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-title text-titleSize'>Wiki<span className='text-alternative'>TOT</span></h1>
            <h4 className='text-subtitle text-subtitleSize'>Ejemplo de subtitulo</h4>
            <span className='text-cards font-cardsSize'>Titulo de card</span>
            <p className='font-normalText'>Ejemplo de texto normal</p>
            <button className='bg-buttons rounded p-2'>Ejemplo</button>

            <h2>Ejemplos de rutas</h2>
            <Link className='bg-buttons' to="card">Ejemplo de ruta 1</Link>
            <Link className='bg-buttons' to="article">Ruta 2</Link>
        </div>
    )
}
