import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

const Home=()=> {
  return (
    <main className='w-full flex flex-col first-letter:content-center items-center 
    relative text-white font-nunito'>
      <div className='w-screen h-screen bg-gray-300 fixed -z-10 ' />
      <Logo/>
      <Navigation/>
      <Outlet/>
    </main>
  )
}

export default Home