import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../components/hooks/useFetch'

export const ViewArticle = () => {

    // const { data } = useFetch(`https://tot.kame-code.com/api/entries/search?q=${id}`);
    console.log(data)
    return (

        <div>
            {/* {
                data.map((item, id) => (
                    <span key={id}>
                        {item.title}
                    </span>
                ))
            } */}
        </div>
    )
}
