import React, { useState } from 'react'
import { Link } from 'react-router'

const MenuBarGeneral = () => {
  const [showsubmenu, setshowsubmenu]=useState(false);
  return (
    <div>
      {/**big screen */}
      <div className='hidden md:flex justify-center items-center bg-blue-200 p-2 text-[16px]'>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Home</Link>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">
          <div className='relative flex flex-col group mx-3 px-3'>
            <p onMouseOver={()=>{
              setshowsubmenu(true);
            }}>Login/Sign up</p>            
          </div>
        </Link>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Our services</Link>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Contact us</Link>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">About us</Link>
      </div>
      {/**big screen */}
      {/**mobile */}
      <div className='flex md:hidden justify-center items-center bg-blue-200 p-2 text-[16px]'>
        mbileview
      </div>
      {/**mobile */}
    </div>
  )
}

export default MenuBarGeneral