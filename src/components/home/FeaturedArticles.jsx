import React from 'react'
import { ArticleCard } from '../ArticleCard'
import data from '../../dummy.json'

export const FeaturedArticles = () => {
    const articles = data.data.slice(0, 3);
    return (
        <>
            <div className='flex flex-col text-center '>
                <h1 className='text-title text-titleSize'>Destacados</h1>
                <h4 className='text-subtitle text-subtitleSize'>Lo más relevante de cada semana</h4>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-4'>
                {
                    articles.map(
                        article => {
                            return (
                                <ArticleCard
                                    title={article.title}
                                    content={article.abstract}
                                    views={article.views}
                                    date={article.date}
                                />
                            )
                        }
                    )
                }
                
            </div>
        </>
    )
}
