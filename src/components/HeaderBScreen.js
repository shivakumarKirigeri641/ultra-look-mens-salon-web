import React from 'react'
import { Link } from 'react-router'

const HeaderBScreen = () => {  
  return (
    <div className='flex bg-[#213555] text-white justify-between border border-gray-400 px-3 rounded-lg shadow-xl items-center text-[15px] font-semibold'>
      <div className='px-2'>
        <p>5th cross, Prakash nagar</p>
        <p>Bangalore - 560095</p>
      </div>
      <Link to="/">
        <div className='cursor-pointer'>
          <img className='w-24' src={require('../images/png/logo-no-background.png')}></img>
        </div>
      </Link>
      <div className='px-2'>
        <p>Contact: Suhas S</p>
        <p>+919900970271</p>
      </div>
    </div>
  )
}

export default HeaderBScreen