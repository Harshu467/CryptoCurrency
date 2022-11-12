import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoProvider } from '../contexts/CryptoContext'

const Home = () => {
  return (
    <>
      <CryptoProvider>
        <main className='w-full flex flex-col first-letter:content-center items-center 
    relative text-white font-nunito'>
          <div className='w-screen h-screen bg-gray-300 fixed -z-10 ' />
          <Logo />
          <Navigation />
          <Outlet />
        </main>
      </CryptoProvider>
    </>
  )
}

export default Home