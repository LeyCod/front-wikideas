import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CreateArticle } from '../pages/CreateArticle'
import { EditArticle } from '../pages/EditArticle'
import { Home } from '../pages/Home'
import { LastArticlesComponent } from '../pages/LastArticlesComponent'
import { MoreVisited } from '../pages/MoreVisited'
import { SearchResults } from '../pages/SearchResults'
import { ViewArticle } from '../pages/ViewArticle'

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
            <Route path="last" element={<LastArticlesComponent />}></Route>
            <Route path="visited" element={<MoreVisited />} ></Route>
        </Routes>
    )
}
