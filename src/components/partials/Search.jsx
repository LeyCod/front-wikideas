import axios from "axios";
import React, { useState } from 'react';
import { Card } from "../Card";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
    const [title, setTitle] = useState("");
    const [articles, setArticles] = useState([]);

    const searchArticles = async () => {
        try {
            const response = await axios.get(`https://demo1-production.up.railway.app/entries/title/${title}`);
            setArticles(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex flex-col  p-4 items-center md:items-start w-auto  '>

            <div className='flex flex-col  items-center md:items-start  w-full '>
                <h1 className='text-titleSize font-semibold'>Wiki<span className='text-alternative font-semibold '>TOT</span></h1>
                <p className='text-subtitle text-cardsSize text-start p-1  '>Somos una enciclopedia entendida como soporte que permite la recopilación, el<br className='hidden md:flex'></br>
                    almacenamiento y la transmisión de la información de  forma estructurada y de<br className='hidden md:flex'></br>
                    contenido abierto. ¿Te gustaría participar? comienza ahora crea un tema o explora <br className='hidden md:flex'>
                    </br>nuestro contenido.</p>
            </div>
            <div className='w-full flex flex-row mt-6'>
                <input
                    className='rounded shadow-md mt-2 shadow-title w-full md:w-[100%] h-10 p-2 bg-subtitle bg-opacity-20'
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Ingrese el título del artículo"
                />
                <button onClick={searchArticles} className='bg-buttons text-selected rounded shadow-md mt-2 shadow-title h-10 p-2'><AiOutlineSearch size={20} /></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8  '>
                {articles.length > 0 ? (
                    <ul>
                        {articles.map(article => (
                            <Card
                                id={article.id}
                                title={article.title}
                                key={article.id}
                                // title={article.title.toUpperCase().slice(0, 15)}
                                content={article.content.slice(0, 250)}
                                views={article.views}
                                created={article.created_at.slice(0, 10)}
                            />
                        ))}
                    </ul>


                ) : (
                    <p>No se encontraron artículos</p>
                )}
            </div>
        </div>
    )
}



// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { AiOutlineSearch } from 'react-icons/ai'
// import { Card } from '../Card';

// //Tiene que mandar un titulo
// //Definir un metodo de caracteres

// export const Search = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     useEffect(() => {
//         if (searchTerm.trim() !== '') { // Verificar que el término de búsqueda no está vacío
//             fetch(`https://demo1-production.up.railway.app/entries/title/${searchTerm}`)
//                 .then(response => response.json())
//                 .then(data => setSearchResults(data))
//                 .catch(error => console.error(error));
//         } else {
//             setSearchResults([]);
//         }
//     }, [searchTerm])


//     const handleClear = () => {
//         setSearchTerm('');
//         setSearchResults([]);
//     }


//     return (
//         <div className='flex flex-col  p-4 items-center md:items-start w-auto  '>
//             <div className='flex flex-col  items-center md:items-start  w-full '>
//                 <h1 className='text-titleSize font-semibold'>Wiki<span className='text-alternative font-semibold '>TOT</span></h1>
//                 <p className='text-subtitle text-cardsSize text-start p-1  '>Somos una enciclopedia entendida como soporte que permite la recopilación, el<br className='hidden md:flex'></br>
//                     almacenamiento y la transmisión de la información de  forma estructurada y de<br className='hidden md:flex'></br>
//                     contenido abierto. ¿Te gustaría participar? comienza ahora crea un tema o explora <br className='hidden md:flex'>
//                     </br>nuestro contenido.</p>
//             </div>
//             <div className='w-full flex flex-row mt-6'>
//                 <input
//                     className='rounded shadow-md mt-2 shadow-title w-full md:w-[100%] h-10 p-2 bg-subtitle bg-opacity-20'
//                     type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//                 <button className='bg-buttons text-selected rounded shadow-md mt-2 shadow-title h-10 p-2'><AiOutlineSearch size={20} /></button>
//             </div>
//             <div className='mt-6 flex flex-col md:items-start items-center justify-center '>
//                 {searchTerm !== '' && <button className='p-1 bg-buttons text-selected rounded ' onClick={handleClear}>Limpiar Búsqueda</button>}
//             </div>

//             <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8  '>
//                 {/* {searchResults.map(result => ( */}
//                 <Card
//                     // id={result.id}
//                     title={searchResults.title}
//                 // key={result.id}
//                 // title={result.title.toUpperCase().slice(0, 15)}
//                 // content={result.content.slice(0, 250)}
//                 // views={result.views}
//                 // created={result.created_at.slice(0, 10)}
//                 />
//                 {/* ))} */}
//             </div>

//         </div>
//     );
// }


//Tiene que mandar un titulo
//Definir un metodo de caracteres




