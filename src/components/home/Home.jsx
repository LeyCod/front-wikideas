import React from 'react'
import { Card } from '../Card'
import { FeaturedArticles } from './FeaturedArticles'
import { HomeImage } from './HomeImage'
import { LastArticles } from './LastArticles'



export const Home = () => {
    return (
        <>
            <div className='flex flex-col w-full p-4 justify-center items-center  '>

                <FeaturedArticles />

                <HomeImage />

                <LastArticles />

            </div>
        </>
    )
}
