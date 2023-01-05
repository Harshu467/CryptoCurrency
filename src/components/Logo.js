import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'
const Logo = () => {
  return (
    <Link to='/' 
    className='absolute  [text-decoration:none] text-lg text-cyan flex items-center sm:text-lg sm:left-[1.5rem] sm:top-[1.5rem]'
    >
        <img className="h-auto w-[25%]" src={logoSvg} alt='CryptoCurrency'/>
        <span>CryptoCurrency</span>
    </Link>
  )
}

export default Logo