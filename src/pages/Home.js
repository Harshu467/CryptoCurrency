import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoProvider } from '../contexts/CryptoContext'
import { StorageProvider } from '../contexts/StorageContext'
import { TrendingProvider } from '../contexts/TrendingContext'

const Home = () => {
  return (
    <>
      <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
        <main className='w-full flex flex-col first-letter:content-center items-center 
    relative text-white font-nunito'>
          <div className='w-screen h-screen bg-gray-300 fixed -z-10 ' />
          <Logo />
          <Navigation />
          <Outlet />
        </main>
        </StorageProvider>
        </TrendingProvider>
      </CryptoProvider>
    </>
  )
}

export default Home