import React from 'react'
import { Card } from '../Card';
import { useFetch } from '../hooks/useFetch'

export const FeaturedArticles = () => {

    const { data } = useFetch("https://tot.kame-code.com/api/entries/latest");

    return (
        <>
            <div className='flex flex-col text-center '>
                <h1 className='text-title text-titleSize'>Destacados</h1>
                <h4 className='text-subtitle text-subtitleSize'>Lo más relevante de cada semana</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
                {data.slice(0, 3).map((item, id) => (
                    <Card
                        key={id}
                        title={item.title.toUpperCase().slice(0, 15)}
                        content={item.content.slice(0, 200)}
                        views={item.views}
                        created={item.created_at.slice(0, 10)}
                    />
                ))}
            </div>
        </>
    )

}


