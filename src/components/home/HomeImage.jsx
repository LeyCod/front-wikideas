import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../assets/img.1.jpg';

export const HomeImage = () => {

    return (
        <>
            <div className=' bg-image-home bg-opacity-50 h-[250px] w-full flex flex-col md:flex-row justify-between overflow-hidden rounded mt-10 mb-10 '>
                <div className='flex flex-col items-center md:items-start justify-center p-0 md:pl-10 text-subtitleSize font-bold mt-10'>
                    <span>Participá de nuestra </span>
                    <span>comunidad y convertite </span>
                    <span>en un <span className='text-alternative font-bold'>TOTER.</span></span>
                    <Link to="create"> <button className='bg-buttons text-smallText text-selected rounded p-2 mt-4'>Crear artículo</button></Link>
                </div>

                <div className='rotated-3d-left md:flex flex-col justify-center pt-[10rem]  mt-10 hidden'>
                    <div className='relative top-0 left-50 z-1 ronded shadow-xl'>
                        <img src={image1} width="300px" alt="" />
                    </div>
                    <div className='relative bottom-50 -top-20 left-5 z-0 rounded shadow-xl '>

                        <img src={image1} width="300px" alt="" />
                    </div>
                </div>

            </div>
        </>

    )

}


