import React from 'react'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Search } from './components/Search'
import { AppRoutes } from './routes/AppRoutes'



export const App = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <NavBar />
        <div className='flex flex-col'>
          <Search />
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </>
  )
}

