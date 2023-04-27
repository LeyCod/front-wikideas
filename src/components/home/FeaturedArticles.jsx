import React, { useEffect, useState } from 'react'
import { Card } from '../Card';
import { useFetch } from '../hooks/useFetch'

export const FeaturedArticles = () => {
    const [data, setData] = useState([])
    const url = "https://demo1-production.up.railway.app/entries/featured";


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])



    return (
        <>

            <div className='flex flex-col text-center '>
                <h1 className='text-title text-titleSize'>Destacados</h1>
                <h4 className='text-subtitle text-subtitleSize'>Lo más relevante de cada semana</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
                {data.map((item, id) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title.toUpperCase().slice(0, 15)}
                        content={item.content.slice(0, 250)}
                        created={item.created_at.slice(0, 10)}
                    />
                ))}
            </div>
        </>
    )

}


