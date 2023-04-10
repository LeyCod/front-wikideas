import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from '../components/Card';



export const ViewArticle = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch(`https://tot.kame-code.com/api/entries/${id}`)
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error(error));

    }, [id])


    const getDataById = (id) => {
        if (data.length > 0) {
            return data.find(article => article.id === id)
        }
        return null;
    }



    return (
        <div>

            <Card
                key={id}
                id={data.id}
                title={data.title}
                content={data.content}
                views={data.views}
                created={data.created_at} />
            <div className='flex flex-row justify-between items-center w-[750px] p-4'>
                <button className='text-alternative font-bold'>Volver</button>
                <Link to="/edit"><button className='bg-buttons p-1 rounded text-selected'>Editar Artículo</button></Link>
            </div>
        </div>

    )
}
