import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Card } from '../components/Card';
import { AiOutlineCalendar, AiOutlineEye } from 'react-icons/ai';
import { IoMdArrowDropleft } from 'react-icons/io'




export const ViewArticle = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }


    useEffect(() => {
        fetch(`https://tot.kame-code.com/api/entries/${id}`)
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error(error));

    }, [id])


    return (
        <>
            <div key={id} className=' max-w-[1140px] md:w-[800px] '>

                <div className='flex flex-col items-start md:items-start justify-center px-6 md:p-4 '>


                    {data.title && <span className='md:text-titleSize text-subtitleSize'>{data.title[0].toUpperCase() + data.title.slice(1)}</span>}
                    <span className='text-subtitle mt-6 text-cardsSize'>{data.content}</span>
                    <div className='flex flex-row justify-between w-[100%]  mt-10 text-subtitle'>
                        <div className='flex flex-row items-center gap-2'>
                            <AiOutlineEye size={18} />
                            <span>{data.views}  </span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <AiOutlineCalendar size={18} />
                            <span>{data.created_at && data.created_at.slice(0, 10)}</span>
                        </div>
                    </div>

                </div>


                <div className='flex flex-row justify-between items-center   p-4'>
                    <div className='flex flex-row items-center gap-2 text-alternative'>
                        <IoMdArrowDropleft size={20} />
                        <button
                            onClick={handleGoBack}
                            className='text-alternative font-bold'>Volver</button>
                    </div>
                    <Link to={`/edit/${id}`}><button className='bg-buttons p-1 rounded text-selected'>Editar Artículo</button></Link>
                </div>
            </div>

        </>

    )
}
