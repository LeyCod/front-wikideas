import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import { Footer } from './Footer'
import { Search } from './Search'


export const Home = () => {
    return (
        <>
            <div className='flex flex-col items-center'> 
                <h1 className='text-title text-titleSize'>Destacados</h1>
                <h4 className='text-subtitle text-subtitleSize'>Lo más relevante de cada semana</h4>
                <Card/>
                <h1 className='text-title text-titleSize'>Últimos temas</h1>
                <h4 className='text-subtitle text-subtitleSize'>Lo nuevo de la comunidad</h4>
                <Card/>
            </div>
        </>
    )
}
