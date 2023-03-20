import React from 'react'
import { useState, useEffect } from 'react'

export const FeaturedArticles = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://tot.kame-code.com/api/entries")
            .then((response) => response.json())
            .then((data) => setData(data.data));
    }, [])

    console.log(data)

    return (
        <div>
            <h1>FeaturedArticles</h1>
            <div>
                {data.map((item, id) => (
                    <li key={id}>{item.data}</li>
                ))}

            </div>
        </div>


    )
}
