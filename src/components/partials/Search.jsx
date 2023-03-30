
import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Card } from '../Card';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        if (searchTerm.trim() !== '') { // Verificar que el término de búsqueda no está vacío
            fetch(`https://tot.kame-code.com/api/entries/search?q=${searchTerm}`)
                .then(response => response.json())
                .then(data => setSearchResults(data.data))
                .catch(error => console.error(error));
        } else {
            setSearchResults([]);
        }
    }, [searchTerm])


    const handleClear = () => {
        setSearchTerm('');
        setSearchResults([]);
    }


    return (
        <div className='flex flex-col  p-4 items-center md:items-start w-auto  '>
            <div className='flex flex-col  items-center md:items-start  w-full '>
                <h1 className='text-titleSize font-semibold'>Wiki<span className='text-alternative font-semibold '>TOT</span></h1>
                <p className='text-subtitle text-cardsSize text-start p-1  '>Somos una enciclopedia entendida como soporte que permite la recopilación, el<br className='hidden md:flex'></br>
                    almacenamiento y la transmisión de la información de  forma estructurada y de<br className='hidden md:flex'></br>
                    contenido abierto. ¿Te gustaría participar? comienza ahora crea un tema o explora <br className='hidden md:flex'>
                    </br>nuestro contenido</p>
            </div>
            <div className='w-full flex flex-row mt-6'>
                <input
                    className='rounded shadow-md mt-2 shadow-title w-full md:w-[100%] h-10 p-2'
                    type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className='bg-buttons text-selected rounded shadow-md mt-2 shadow-title h-10 p-2'><AiOutlineSearch size={20} /></button>
            </div>
            <div className='mt-6 flex flex-col md:items-start items-center justify-center '>
                {searchTerm !== '' && <button className='p-1 bg-buttons text-selected rounded ' onClick={handleClear}>Limpiar Búsqueda</button>}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8  '>
                {searchResults.map(result => (
                    <Card
                        key={result.id}
                        title={result.title.toUpperCase().slice(0, 15)}
                        content={result.content.slice(0, 250)}
                        views={result.views}
                        created={result.created_at.slice(0, 10)}
                    />
                ))}
            </div>

        </div>
    );
}
