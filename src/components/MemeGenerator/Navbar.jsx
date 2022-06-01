import React from 'react'
import Troll from '../../assets/Troll.png'

function Navbar() {
  return (
    <>
    <div className='flex flex-row items-center justify-between bg-gradient-to-r from-[#672280]  to-[#A626D3] w-full'>
        <div className='flex flex-row items-center p-6'>
            <div >
                <img className='max-h-10 pr-2' src={Troll} alt=''></img>
            </div>
            <div className='text-white text-2xl font-bold uppercase'>Meme Generator</div>

        </div>
        <div className='text-white p-6 text-lg'>React Course - Project 3</div>

    </div>
    
    </>
  )
}

export default Navbar