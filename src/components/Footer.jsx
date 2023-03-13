import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub} from "react-icons/ai";


export const Footer = () => {

    return (
        <footer className='flex flex-row justify-center items-center bg-bg-footer text-selected h-24'>
            {/* Links footer */}
            <Link to="/" className="mr-5">Políticas de privacidad</Link>
            <p> / </p>
            <Link to="/" className="mr-5 ml-5">Términos y condiciones</Link>
            <p> / </p>
            <Link to="/" className="ml-5 mr-10">Sobre nosotros</Link>

            {/* iconos footer */}
            <Link to="/" className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded mr-2">
                <AiOutlineInstagram className="text-selected text-cardsSize"/> 
            </Link>
            <Link to="/" className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded mr-2">
                <AiFillLinkedin className="text-selected text-cardsSize"/>
            </Link>
            <Link to="/" className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded mr-2">
                <AiOutlineTwitter className="text-selected text-cardsSize"/>
            </Link>
            <Link to="/" className="h-8 w-8 bg-alternative flex flex-row justify-center items-center rounded">
                <AiOutlineGithub className="text-selected text-cardsSize"/>
            </Link>
        </footer>
    )
}
