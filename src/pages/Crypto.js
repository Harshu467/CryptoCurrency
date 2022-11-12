import React from 'react'
import { Outlet } from 'react-router-dom'
import Filter from '../components/Filter'
import Tables from '../components/Table'

const Crypto = () => {
  return (
    <section
    className='w-[80%] h-full flex flex-end mt-16 mb-24 relative flex-col '>
      <Filter/>
      <Tables/>
      <Outlet/>
    </section>
  )
}

export default Crypto;