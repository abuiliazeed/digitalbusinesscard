import React from 'react'
import {BiWorld} from 'react-icons/bi'

function Navbar() {
  return (
      <>
          <div className='p-4 flex flex-row items-center justify-center bg-[#F55A5A] text-white'>
        <BiWorld className='text-4xl'/>
        <p className='text-2xl pl-2'>my travel journal.</p>
        </div>
      
      </>

  )
}

export default Navbar