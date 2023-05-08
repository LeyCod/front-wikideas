import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import { useFetch } from '../hooks/useFetch';

export const LastArticles = () => {
    const [data, setData] = useState([])

    const url = "https://demo1-production.up.railway.app/entries/last";


    useEffect(() => {
        fetch(url)
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
                        content={item.content}
                        title={item.title.toUpperCase()}

                    />
                ))}
            </div>
        </>
    )
}
