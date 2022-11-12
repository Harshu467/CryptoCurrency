import React from 'react'
import SearchImg from '../assets/search-icon.svg'
const Search = () => {
  return (
    <form>
        <input type='text' name='Search' />
        <button type='submit' >\
        <img src={SearchImg} alt="Search" />
        </button>
    </form>
  )
}

export default Search