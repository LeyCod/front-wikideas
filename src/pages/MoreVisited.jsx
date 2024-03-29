import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';
import { useFetch } from '../components/hooks/useFetch';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import 'animate.css';
import { featuredArticlesUrl } from '../constants/url';


export const MoreVisited = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [numberPage, setNumberPage] = useState(6);
    const [hasMoreElements, setHasMoreElements] = useState(true);

    const url = featuredArticlesUrl;


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])


    const elementsPerPage = 6;
    const totalElements = data.length + 1;

    const totalPages = Math.ceil(totalElements / elementsPerPage);

    const ifHasMoreElements = page <= totalPages;



    const handleChangePage = () => {

        if (hasMoreElements) {
            return setPage(page + 1)
        }
    }

    const handleReturnPage = () => {
        return setPage(1)
    }

    return (

        <>
            <section className='flex flex-col items-center '>
                <div className='flex flex-col text-center '>
                    <h1 className='text-title text-titleSize'>Más visitados</h1>
                    <h4 className='text-subtitle text-subtitleSize'>Los más populares de la comunidad</h4>
                </div>

                <div className='grid grid-cols-1  md:grid-cols-3 gap-6 mt-4 p-6  '>
                    {data.slice(
                        (page - 1) * numberPage,
                        (page - 1) * numberPage + numberPage
                    )
                        .map((item, id) => (

                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title.slice(0, 25)}
                                content={item.content.slice(0, 150)}
                                views={item.views}
                                created={item.created_at.slice(0, 10)}
                            />

                        ))}
                </div>
                {/* ERROR MESSAGE */}
                {!ifHasMoreElements &&
                    <div className='flex items-center justify-center h-[200px] p-4 '>
                        <p className='text-cardsSize md:text-subtitleSize text-alternative'>No hay más artículos para mostrar.</p>
                    </div>}
                <div className='flex flex-row items-center justify-center mt-10 gap-3 p-4 font-bold'>

                    <button className='flex flex-row items-center' onClick={handleReturnPage}><AiFillCaretLeft size={20} className="text-alternative" /> Anterior</button>
                    <button className='flex flex-row items-center' onClick={handleChangePage}>Siguiente <AiFillCaretRight size={20} className="text-alternative" /></button>

                </div>
            </section>

        </>

    )
}
