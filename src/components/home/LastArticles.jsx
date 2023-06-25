import React, { useEffect, useState } from 'react';
import { Card } from '../Card';

const url1 = "https://demo1-production.up.railway.app/entries/last"
const url2 = "https://demo1-2-production.up.railway.app/entries/last"

export const LastArticles = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url2)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])


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
                        title={item.title.slice(0, 30)}
                        content={item.content.slice(0, 150)}
                        created={item.created_at.slice(0, 10)}
                        views={item.views}
                    />
                ))}
            </div>
        </>
    )
}
