import React from 'react'
import { Footer } from './components/partials/footer/Footer'
import { NavBar } from './components/partials/NavBar'
import { Search } from './components/partials/Search'
import { AppRoutes } from './routes/AppRoutes'
import { AboutUs } from './pages/AboutUs'



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

