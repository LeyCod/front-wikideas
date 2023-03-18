import React from 'react'
import { Card } from '../components/Card'
import { FeaturedArticles } from '../components/home/FeaturedArticles'
import { HomeImage } from '../components/home/HomeImage'

export const Home = () => {
    return (
        <>
            <div className='flex flex-col w-full p-4 justify-center items-center  '>
                <FeaturedArticles />

                <HomeImage />
                <div className='flex flex-col text-center '>
                    <h1 className='text-title text-titleSize'>Últimos temas</h1>
                    <h4 className='text-subtitle text-subtitleSize'>Lo nuevo de la comunidad</h4>
                </div>
                <Card />
            </div>
        </>
    )
}
