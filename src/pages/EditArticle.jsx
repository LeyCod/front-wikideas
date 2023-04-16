import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BiBold, BiItalic, BiUnderline, BiStrikethrough, BiListUl } from 'react-icons/bi'
import { HiCodeBracket } from 'react-icons/hi2'
import { RiDoubleQuotesL } from 'react-icons/ri'


export const EditArticle = () => {
    const [data, setData] = useState({ content: '' });
    const [formData, setFormData] = useState({ content: '' })

    const { id } = useParams();

    const navigate = useNavigate();



    useEffect(() => {
        fetch(`https://tot.kame-code.com/api/entries/${id}`)
            .then(response => response.json())
            .then(data => {
                setData(data.data);
                setFormData(data.data)
            })
            .catch(error => console.error(error));

    }, [id]);


    const handleFormChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://tot.kame-code.com/api/entries/${id}`, {
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

    console.log(formData)


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

                <div className='flex flex-row gap-4 items-center p-4 md:p-0  text-subtitle mt-4'>
                    <BiBold size={18} />
                    <BiItalic size={18} />
                    <BiUnderline size={18} />
                    <BiStrikethrough size={18} />
                    <BiListUl size={18} />
                    <RiDoubleQuotesL size={18} />
                    <HiCodeBracket size={18} />
                </div>


                <div className='flex flex-col gap-4 items-center md:items-start p-4 md:p-0  text-subtitle mt-4 max-w-[1140px] '>
                    <h4 className=' p-4 md:p-0 font-bold text-subtitleSize'>Contenido</h4>
                    <textarea
                        className='border-none overflow-hidden text-start w-[350px] md:w-[800px] h-[400px]'
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleFormChange}
                    />
                </div>
                <div className='flex flex-row justify-between'>
                    <button className='bg-buttons text-selected p-1 rounded' type="submit">Editar Artículo</button>
                    <button className='text-alternative font-bold' type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

    // <div key={id} className=' max-w-[1140px] md:w-[800px]  p-4  '>
    //     <h1 className='text-subtitleSize md:text-titleSize'>Editar Artículo</h1>

    //     <h4 className='text-subtitleSize font-bold mt-4'>Título</h4>
    //     <span className='  mt-4 text-subtitle shadow-xl p-2'>{data.title}</span>

    //     <h4 className='text-subtitleSize font-bold mt-10'>Contenido</h4>
    //     <div className='flex flex-row gap-4 items-center p-4 md:p-0  text-subtitle mt-4'>
    //         <BiBold size={18} />
    //         <BiItalic size={18} />
    //         <BiUnderline size={18} />
    //         <BiStrikethrough size={18} />
    //         <BiListUl size={18} />
    //         <RiDoubleQuotesL size={18} />
    //         <HiCodeBracket size={18} />
    //     </div>

    //     <div className='shadow-xl  text-start mt-4'>
    //         <p>{data.content}</p>
    //     </div>

    //     <div className='flex justify-center md:justify-end mt-6 '>
    //         <button className='bg-buttons text-selected rounded p-1'>Editar Artículo</button>
    //     </div>

    // </div>