import React from 'react'
import SearchImg from '../assets/search-icon.svg'
const Search = () => {
  return (
    <form className="w-96 relative flex items-center ml-7 font-nunito" >
        <input type='text' className='w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan' placeholder="Search Here" name='Search' />
        <button type='submit' >
        <img src={SearchImg} alt="Search" />
        </button>
    </form>
  )
}

export default Search