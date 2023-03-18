import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub} from "react-icons/ai";


export const Footer = () => {

    return (
        <footer className="flex flex-col md:flex-row justify-center items-center bg-bg-footer text-selected md:h-24 p-5">
            {/* Links footer */}
            <Link to="/" className="mr-5">Políticas de privacidad</Link>
            <span className="hidden sm:flex"> / </span>
            <Link to="/" className="mr-5 ml-5 mt-2 md:mt-0">Términos y condiciones</Link>
            <span className="hidden sm:flex"> / </span>
            <Link to="/" className="ml-5 mr-10 mt-2 md:mt-0">Sobre nosotros</Link>

            {/* iconos footer */}
            <div className='flex mt-2 md:mt-0'>
                <Link to="/" className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded mr-2">
                    <AiOutlineInstagram className="text-selected text-cardsSize"/> 
                </Link>
                <Link to="/" className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded mr-2">
                    <AiFillLinkedin className="text-selected text-cardsSize"/>
                </Link>
                <Link to="/" className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded mr-2">
                    <AiOutlineTwitter className="text-selected text-cardsSize"/>
                </Link>
                <Link className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded">
                    <AiOutlineGithub className="text-selected text-cardsSize"/>
                </Link>
            </div>
        </footer>
    )
}
