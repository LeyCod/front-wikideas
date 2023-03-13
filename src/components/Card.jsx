import React from 'react'
import { AiOutlineEye, AiOutlineCalendar } from 'react-icons/ai';


export const Card = () => {
    //api call
    return (
        <div className='grid grid-cols-3 gap-6 mt-4'>
            <div className='w-[230px] flex flex-col items-start'>
                <button className=' w-full h-[3px]  cursor-auto bg-alternative   flex rounded'></button>

                <h3 className='mt-6 text-cards font-semibold text-cardsSize'>El arte de la guerra</h3>
                <p className='mt-6 font-normalText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo exercitationem saepe excepturi, quod, et totam, voluptas delectus enim quaerat quia impedit. Ducimus incidunt unde nobis aliquid reiciendis impedit fugit saepe.</p>
                <div className='flex flex-row gap-12 mt-4'>
                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineEye size={18} />
                        <p>1240</p>
                    </div>
                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineCalendar size={18} />
                        <p>12/05/2022</p>
                    </div>
                </div>
            </div>

            <div className='w-[230px] flex flex-col items-start'>
                <button className=' w-full h-[3px] cursor-auto bg-alternative flex rounded'></button>

                <h3 className='mt-6 text-cards font-semibold text-cardsSize'>El arte de la guerra</h3>
                <p className='mt-6 font-normalText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo exercitationem saepe excepturi, quod, et totam, voluptas delectus enim quaerat quia impedit. Ducimus incidunt unde nobis aliquid reiciendis impedit fugit saepe.</p>
                <div className='flex flex-row gap-12 mt-4'>
                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineEye size={18} />
                        <p>1240</p>
                    </div>
                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineCalendar size={18} />
                        <p>12/05/2022</p>
                    </div>
                </div>
            </div>

            <div className='w-[230px] flex flex-col items-start'>
                <button className=' w-full h-[3px]  cursor-auto bg-alternative   flex rounded'></button>

                <h3 className='mt-6 text-cards font-semibold text-cardsSize'>El arte de la guerra</h3>
                <p className='mt-6 font-normalText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo exercitationem saepe excepturi, quod, et totam, voluptas delectus enim quaerat quia impedit. Ducimus incidunt unde nobis aliquid reiciendis impedit fugit saepe.</p>
                <div className='flex flex-row gap-12 mt-4'>
                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineEye size={18} />
                        <p>1240</p>
                    </div>
                    <div className='flex flex-row items-center gap-1 text-subtitle'>
                        <AiOutlineCalendar size={18} />
                        <p>12/05/2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}