import React from 'react'
import { NavBar } from './components/NavBar'
import { AppRoutes } from './routes/AppRoutes'



export const App = () => {
  return (
    <>
      <NavBar />
      {/* Renderizado del componente de las rutas */}
      <AppRoutes />
    </>
  )
}

