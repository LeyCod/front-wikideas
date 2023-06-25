import axios from "axios";
import React, { useState } from 'react';
import { Card } from "../Card";
import { AiOutlineSearch } from "react-icons/ai";


export const Search = () => {
    const [title, setTitle] = useState("");
    const [articles, setArticles] = useState([]);
    const [searched, setSearched] = useState(false);

    const searchArticles = async () => {
        try {
            const response = await axios.get(`https://demo1-2-production.up.railway.app/entries/title/${title}`);
            setArticles(response.data);
            setSearched(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        const searchTitle = event.target.value;
        setTitle(searchTitle);

        if (searchTitle) {
            searchArticles(searchTitle);
        } else {
            setArticles([]);
            setSearched(false);
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
                    onChange={handleInputChange}
                    placeholder="Ingrese el título del artículo"
                />
                <button onClick={searchArticles} className='bg-buttons text-selected rounded shadow-md mt-2 shadow-title h-10 p-2'><AiOutlineSearch size={20} /></button>

            </div>
            <div className='flex flex-row gap-6 mt-8  '>
                {searched && articles.length > 0 ? (
                    <ul className="flex flex-row gap-6">
                        {articles.map(article => (
                            <Card
                                id={article.id}
                                title={article.title.slice(0, 30)}
                                key={article.id}
                                content={article.content.slice(0, 150)}
                                views={article.views}
                                created={article.created_at.slice(0, 10)}
                            />
                        ))}
                    </ul>


                ) : null

                }
            </div>
        </div>
    )
}






