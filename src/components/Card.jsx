import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineCalendar } from 'react-icons/ai';
import 'animate.css';
import { Link } from 'react-router-dom';



//pasamos por props los elementos de la card para después reemplazarlos por datos de la API
export const Card = ({ id, title, content, views, created, isBigCard }) => {
    // ${isBigCard ? 'hidden' : ''}${isBigCard ? 'justify-between w-[750px]' : ''}
    return (
        <>
            <Link to={`/article/${id}`}>
                <div key={id}
                    className={`w-[250px] h-[350px] flex flex-col items-center justify-center hover:bg-subtitle rounded  hover:bg-opacity-25 hover:-translate-y-2 ease-in duration-200 cursor-pointer animate__animated animate__fadeIn ${isBigCard ? 'big-card ' : ''}`}>
                    <button className={` w-full h-[3px]  cursor-auto bg-alternative    flex rounded `}></button>
                    <div className='w-full h-[200px] text-center md:text-start  px-2'>
                        <h1 className='mt-6 text-cards font-semibold text-subtitleSize ' >{title}...</h1>

                        <p className='mt-6 font-normalText text-center md:text-start  '>{content}...</p>
                    </div>

                    <div className='flex flex-row gap-12 w-full p-2 h-auto mt-20  justify-between'>
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