import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Card } from '../components/Card'
import { CreateArticle } from '../components/CreateArticle'
import { Home } from '../components/Home'

export const AppRoutes = () => {
    return (
        <Routes>
            {/* se usa el /* para establecer que el home sea la ruta por defecto
            de la app */}
            <Route path='/*' element={<Home />}></Route>
            <Route path="card" element={<Card />} ></Route>
            <Route path="article" element={<CreateArticle />}></Route>
        </Routes>
    )
}
