import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export const EditArticle = () => {
    const [data, setData] = useState({ content: '' });
    const [formData, setFormData] = useState({ content: '' })

    //states para manejar caracteres del textarea
    const [value, setValue] = useState('');
    const [charCount, setCharCount] = useState(0);


    const { id } = useParams();

    const navigate = useNavigate();


    //recupera el articulo por su id
    useEffect(() => {
        fetch(`https://demo1-2-production.up.railway.app/entries/${id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFormData(data)
            })
            .catch(error => console.error(error));
    }, [id]);

    //target de los inputs
    const handleFormChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        const inputValue = event.target.value;
        const inputLength = inputValue.length;

        if (inputLength <= 255) {
            setValue(inputValue);
            setCharCount(inputLength);

        }
    };

    //define el metodo y edita la entrie por su id, la devuelve en forma de string
    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://demo1-2-production.up.railway.app/entries/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })

            .then(response => response.json())

            .then(() => navigate(`/article/${id}`))

            .catch(error => console.error(error));
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div className=' max-w-[1140px] md:w-[800px]  p-4  '>
            <h1 className='p-4 md:p-0 text-subtitleSize md:text-titleSize'>Editar Artículo</h1>
            <form onSubmit={handleSubmit}>
                <div className='p-4 md:p-0'>
                    <h1 className='text-subtitleSize font-bold mt-4'>{data.title}</h1>
                </div>


                <div className='flex flex-col gap-4 items-center md:items-start p-4 md:p-0  text-subtitle mt-4 max-w-[1140px] '>
                    <h4 className=' p-4 md:p-0 font-bold text-subtitleSize'>Contenido</h4>
                    <textarea
                        className='text-title focus:outline-none focus:border-subtitle focus:ring-subtitle focus:ring-2 bg-subtitle bg-opacity-30 rounded text-start w-[350px] md:w-[800px] h-[400px] '
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleFormChange}
                    />
                    <div className='absolute left-[78%] top-[1240px] md:top-[150%] text-alternative font-bold'>{charCount} / 255</div>

                </div>
                <div className='flex flex-row justify-between mt-6'>
                    <button className='bg-buttons text-selected p-1 rounded' type="submit">Editar Artículo</button>

                    <button className='text-alternative font-bold' type="button" onClick={handleCancel}>Volver</button>
                </div>
            </form>
        </div>
    )
}

