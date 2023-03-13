import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

export const Footer = () => {

    return (
        <div className='flex flex-col md:flex-row text-center gap-10 md:gap-20 items-center justify-center bg-bg-footer h-full md:h-[100px] mt-6 p-4'>
            <div className='flex flex-col md:flex-row text-selected gap-4 text-normalText'>
                <a href="#">Políticas de privacidad </a>
                <span className='md:flex hidden'>/</span>
                <a href="#">Términos y condiciones</a>
                <span className='md:flex hidden'>/</span>
                <a href="#">Sobre nosotros</a>
            </div>
            <div className='flex flex-row items-end justify-end gap-4'>
                <button className='text-selected bg-alternative rounded p-1'><AiOutlineInstagram size={22} /></button>
                <button className='text-selected bg-alternative rounded p-1'><AiOutlineLinkedin size={22} /></button>
                <button className='text-selected bg-alternative rounded p-1'><AiOutlineTwitter size={22} /></button>
                <button className='text-selected bg-alternative rounded p-1'><AiFillGithub size={22} /></button>
            </div>
        </div>
    )
}
