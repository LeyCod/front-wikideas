import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';
import { useFetch } from '../components/hooks/useFetch';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'


export const LastArticlesComponent = () => {
    const { data } = useFetch("https://tot.kame-code.com/api/entries/latest");
    console.log(data)

    const [page, setPage] = useState(1);
    const [numberPage, setNumberPage] = useState(6);
    const [hasMoreElements, setHasMoreElements] = useState(true);
    //investigar como hacer que el paginado no siga cuando no hay elementos
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
            <div className='flex flex-col text-center '>
                <h1 className='text-title text-titleSize'>Últimos Ingresos</h1>
                <h4 className='text-subtitle text-subtitleSize'>Recientemente creado por la comunidad</h4>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-3 gap-6 mt-4 '>
                {data.slice(
                    (page - 1) * numberPage,
                    (page - 1) * numberPage + numberPage
                )
                    .map((item, id) => (
                        <Card
                            key={id}
                            title={item.title.toUpperCase().slice(0, 15)}
                            content={item.content.slice(0, 150)}
                            views={item.views}
                            created={item.created_at.slice(0, 10)}
                        />
                    ))}
            </div>
            <div className='flex flex-row items-center justify-center mt-10 gap-3 p-4 font-bold'>

                <button className='flex flex-row items-center' onClick={handleReturnPage}><AiFillCaretLeft size={20} className="text-alternative" /> Anterior</button>
                <button className='flex flex-row items-center' onClick={handleChangePage}>Siguiente <AiFillCaretRight size={20} className="text-alternative" /></button>

            </div>
        </>

    )
}
