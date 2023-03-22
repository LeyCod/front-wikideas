import React from 'react'
import image1 from '../../assets/img.1.jpg';

export const HomeImage = () => {

    return (
        <>
            <div className="container block py-28 bg-image-home bg-opacity-50 h-[380px]  rounded mt-8 mb-8 ">
                <div className="bg-blue-200 pl-12 pt-5">
                    <div className="relative overflow-hidden">
                        <div className="grid grid-cols-5 justify-between">
                            <div className="col-span-2 p-8 pb-16">
                                <div className="mb-5 text-subtitleSize font-bold">
                                    <h2 className="text-4xl">
                                        Participá de nuestra comunidad y convertite en un <span class="text-alternative">TOTER.</span>
                                    </h2>
                                </div>

                                <a className="bg-buttons text-selected hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="#">Crear Artículo</a>
                            </div>


                            <div className="col-span-3 col-lg-5  ">

                                <div className="absolute top-0 left-1/2 max-w-[1140px]  overflow-hidden pt-0 pb-20 px-3 ">

                                    <figure className="bg-white rounded-b-lg shadow-xl rotated-3d-left">
                                        <div className="bg-white rounded-b-lg shadow">
                                            <img className="max-w-full h-auto rounded-b-lg" src={image1} alt="TOT" />
                                        </div>
                                    </figure>

                                </div>



                                <div className="absolute top-0 left-1/2 max-w-[1140px] overflow-hidden pt-0 pb-24 px-3 mt-16 ml-8 ">

                                    <figure className="dbg-white rounded-b-lg shadow rotated-3d-left">
                                        <div className="bg-white rounded-b-lg shadow">
                                            <img className="max-w-full h-auto rounded-b-lg" src={image1} alt="TOT" />
                                        </div>
                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}


