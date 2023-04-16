import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineCalendar } from 'react-icons/ai';
import 'animate.css';
import { Link } from 'react-router-dom';



//pasamos por props los elementos de la card para después reemplazarlos por datos de la API
export const Card = ({ id, title, content, views, created, isBigCard, onCardClick }) => {

    return (
        <>
            <Link to={`/article/${id}`}>
                <div key={id}

                    className={`w-[250px] flex flex-col items-center  md:items-start hover:bg-subtitle  hover:bg-opacity-25 hover:-translate-y-2 ease-in duration-200 cursor-pointer animate__animated animate__fadeIn ${isBigCard ? 'big-card ' : ''}`}>

                    <button className={` w-full h-[3px]  cursor-auto bg-alternative   flex rounded ${isBigCard ? 'hidden' : ''}`}></button>

                    <h1 className='mt-6 text-cards font-semibold text-cardsSize' >{title}</h1>

                    <p className='mt-6 font-normalText text-start md:text-start '>{content}</p>

                    <div className={`flex flex-row gap-12 mt-8 dates justify-between ${isBigCard ? 'justify-between w-[750px]' : ''}`}>
                        <div className='flex flex-row items-center gap-1 text-subtitle'>
                            <AiOutlineEye size={18} />
                            <p>{views}</p>
                        </div>

                        <div className='flex flex-row items-center gap-1 text-subtitle'>
                            <AiOutlineCalendar size={18} />
                            <p>{created}</p>
                        </div>

                    </div>


                </div >
            </Link>

        </>
    )
}