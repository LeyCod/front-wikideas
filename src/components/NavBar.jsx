import React from 'react'
import logo from '../assets/images/TOT-icon.png'

export const NavBar = () => {
    return (
        <div className='w-[25%] h-full flex flex-col items-center justify-center   '>
            <img className='mt-4' src={logo} width={90}></img>
            <h1 className='text-title text-titleSize font-bold'>TOT</h1>
        </div>
    )
}
