import React, { useRef, useState } from 'react'
import { CreatePopUp } from './CreatePopUp'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { IoWarningOutline } from 'react-icons/io5'




export const CreateArticle = () => {
    const [formData, setFormData] = useState({ title: '', content: '' })
    const [showPopup, setShowPopup] = useState(false);

    //states para manejar caracteres del textarea
    const [charCount, setCharCount] = useState(0);

    const navigate = useNavigate();

    const handleFormChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });

        const inputValue = event.target.value;
        const inputLength = inputValue.length;


        if (inputLength <= 1050) {
            setFormData({ ...formData, [event.target.name]: inputValue });
            setCharCount(inputLength);

        } else {
            setCharCount(1050)
        }

    };

    const handleSubmit = event => {
        event.preventDefault();

        if (!formData.title.trim() || !formData.content.trim()) {
            setShowPopup(false)
            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos',
                text: 'El título y el contenido no pueden estar vacíos!',
            }
            )
            return;
        }

        if (formData.content.length > 1050) {
            setShowPopup(false);
            Swal.fire({
                icon: 'error',
                title: 'Error de contenido',
                text: 'El contenido no puede superar los 1050 caracteres!',
            });
            return;
        }
        //levar esta func a otro componente

        fetch(`https://demo1-2-production.up.railway.app/entries/store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ title: formData.title, content: formData.content })
        })

            .then(response => response.json())
            .then(navigate("*"))
            .catch(error => console.error(error));
    };

    return (
        <div className='flex flex-col w-full p-4 justify-center items-start '>
            <h1 className='text-titleSize' >Crear Artículo</h1>
            <form onSubmit={handleSubmit} >
                <h3 className='text-subtitleSize mt-6'>Título</h3>
                <div className='flex flex-row  items-center md:items-start  w-full '>
                    <input
                        name='title'
                        id='title'
                        value={formData.title}
                        onChange={handleFormChange}
                        className='rounded shadow-md mt-2 shadow-title w-full md:w-[100%] h-10 p-2  bg-subtitle bg-opacity-30 border-opacity-30 
                        focus:outline-none focus:border-subtitle focus:ring-subtitle focus:ring-2 text-cardsSize '
                        type="text"
                        placeholder="Título del artículo"
                        autoFocus ></input>

                </div>
                <div className='flex flex-row items-center gap-2 mt-4 text-alternative'>
                    <IoWarningOutline size={20} />
                    <p><b>Atención</b>: El título no podrá ser modificado una vez que se cree el artículo</p>
                </div>
                <div className='h-auto flex items-center md:items-start w-auto md:w-full  mt-6'>
                    <textarea
                        className='focus:outline-none focus:border-subtitle focus:ring-subtitle focus:ring-2 bg-subtitle bg-opacity-30 rounded w-[350px] md:w-[800px] h-[400px] '
                        name="content"
                        id="content"
                        value={formData.content}
                        onChange={handleFormChange}
                        cols="100"
                        rows="10"
                    >
                    </textarea>
                    <div className='absolute left-[73%]  top-[1250px] md:top-[150%] text-alternative font-bold'>{charCount} / 1050</div>
                </div>

            </form >
            <button
                className='bg-buttons text-selected p-1 rounded mt-4'
                onClick={() => setShowPopup(true)}>Crear Artículo</button>
            <CreatePopUp
                show={showPopup}
                onClose={() => setShowPopup(false)}
                create={handleSubmit}
            />
        </div >
    )
}


