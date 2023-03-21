import React from 'react'
import { AiOutlineEye, AiOutlineCalendar } from 'react-icons/ai';

//pasamos por props los elementos de la card para después reemplazarlos por datos de la API
export const Card = ({ title, content, views, created }) => {
    return (
        <>
            <div className='w-[230px] flex flex-col items-start '>
                <button className=' w-full h-[3px]  cursor-auto bg-alternative   flex rounded'></button>

                <h1 className='mt-6 text-cards font-semibold text-cardsSize' >{title}...</h1>

                <p className='mt-6 font-normalText'>{content}</p>

                <div className='flex flex-row gap-12 mt-4'>
                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineEye size={18} />
                        <p>{views}</p>
                    </div>

                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineCalendar size={18} />
                        <p>{created}</p>
                    </div>
                </div>
            </div>
        </>
    )
}