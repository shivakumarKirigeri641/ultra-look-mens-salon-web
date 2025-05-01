import React, { useState } from 'react'
import { Link } from 'react-router'

const MenuBarGeneral = () => {
  const [showsubmenu, setshowsubmenu]=useState(false);
  return (
    <div className='flex justify-center items-center bg-blue-200 p-2 text-[16px]'>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Home</Link>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">
        <div className='relative flex flex-col group mx-3 px-3'>
          <p onMouseOver={()=>{
            setshowsubmenu(true);
          }}>Login/Sign up</p>
          {
            showsubmenu && 
            <div className='absolute top-10 bg-blue-200 flex flex-col w-full' onMouseLeave={()=>{
              setshowsubmenu(false);
            }}>
                <Link className='p-1 m-2 group-hover:flex' to="/">Admin login</Link>
                <Link className='p-1 m-2' to="/">Staff login</Link>
                <Link className='p-1 m-2' to="/">Staff signup</Link>
            </div>
          }
        </div>
      </Link>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Our services</Link>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Contact us</Link>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">About us</Link>
    </div>
  )
}

export default MenuBarGeneral