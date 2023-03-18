import React from 'react'
import { AiOutlineEye, AiOutlineCalendar } from 'react-icons/ai';


export const ArticleCard = (props) => {
    //api call
    return (
        <div className='w-[230px] flex flex-col items-start'>
            <button className=' w-full h-[3px]  cursor-auto bg-alternative   flex rounded'></button>

            <h3 className='mt-6 text-cards font-semibold text-cardsSize'>{props.title}</h3>
            <p className='mt-6 font-normalText'>{props.content}</p>
            <div className='flex flex-row gap-12 mt-4'>
                <div className='flex flex-row items-center gap-1 text-subtitle'>
                    <AiOutlineEye size={18} />
                    <p>{props.views}</p>
                </div>
                <div className='flex flex-row items-center gap-1 text-subtitle'>
                    <AiOutlineCalendar size={18} />
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}