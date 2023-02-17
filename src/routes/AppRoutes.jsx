import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CreateArticle } from '../components/CreateArticle'
import { EditArticle } from '../components/EditArticle'
import { Home } from '../components/Home'
import { SearchResults } from '../components/SearchResults'
import { ViewArticle } from '../components/ViewArticle'

export const AppRoutes = () => {
    return (
        <Routes>
            {/* se usa el /* para establecer que el home sea la ruta por defecto
            de la app */}
            <Route path='/*' element={<Home />}></Route>
            <Route path="article" element={<ViewArticle />}></Route>
            <Route path="create" element={<CreateArticle />}></Route>
            <Route path="edit" element={<EditArticle />}></Route>
            <Route path="results" element={<SearchResults />}></Route>
        </Routes>
    )
}
