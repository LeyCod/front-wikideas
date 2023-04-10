import React from 'react';
import { Card } from '../Card';
import { useFetch } from '../hooks/useFetch';

export const LastArticles = () => {

    const { data } = useFetch("https://tot.kame-code.com/api/entries/latest");



    return (
        <>
            <div className='flex flex-col text-center '>
                <h1 className='text-title text-titleSize'>Últimos temas</h1>
                <h4 className='text-subtitle text-subtitleSize'>Lo nuevo de la comunidad</h4>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-3 gap-6 mt-4'>
                {data.slice(0, 3).map((item) => (
                    <Card

                        key={item.id}
                        id={item.id}
                        title={item.title.toUpperCase().slice(0, 15)}
                        content={item.content.slice(0, 250)}
                        views={item.views}
                        created={item.created_at.slice(0, 10)}
                    />
                ))}
            </div>
        </>
    )
}
