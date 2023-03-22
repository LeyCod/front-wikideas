import React from 'react'
import { FeaturedArticles } from '../components/home/FeaturedArticles'
import { HomeImage } from '../components/home/HomeImage'
import { LastArticles } from '../components/home/LastArticles'



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
