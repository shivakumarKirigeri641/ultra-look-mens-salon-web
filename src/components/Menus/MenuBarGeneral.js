import React, { useState } from 'react'
import { Link } from 'react-router'

const MenuBarGeneral = () => {
  const [showsubmenu, setshowsubmenu]=useState(false);
  return (
    <div>
      {/**big screen */}
      <div className='hidden md:flex justify-center items-center bg-blue-200 p-2 text-[16px]'>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">
          <div className='flex justify-between items-center'>
            <img className='w-6 mx-2' src={require('../../images/icons/home.png')}/>
            <p>Home</p>
          </div>
        </Link>
        <div className='relative flex flex-col group mx-5 px-3'>
            <div className='flex justify-between items-center'
            onMouseOver={()=>{
              setshowsubmenu(true);
            }}>
              <img className='w-6 mx-2' src={require('../../images/icons/login (2).png')}/>
              <p>Login/Sign up</p>
            </div>            
            {showsubmenu && (
            <div className='absolute p-1 rounded-md flex text-lg flex-col top-10 w-52 bg-blue-200' onMouseLeave={()=>{
              setshowsubmenu(false)
            }}
            onClick={()=>{
              setshowsubmenu(false)
            }}>
              <Link className='p-2 my-1 hover:underline border-b-2 border-gray-200 hover:italic ' to="/">
              <div className='flex justify-start items-center'>
                <img className='w-6 mx-2' src={require('../../images/icons/admin.png')}/>
                <p>Admin login</p>
              </div>
              </Link>
              <Link className='p-2 my-1 hover:underline border-b-2 border-gray-200 hover:italic' to="/stafflogin">
              <div className='flex justify-start items-center'>
                <img className='w-6 mx-2' src={require('../../images/icons/admin.png')}/>
                <p>Staff login</p>
              </div>
              </Link>
            </div>
            )}
          </div>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">
          <div className='flex justify-between items-center'>
            <img className='w-6 mx-2' src={require('../../images/icons/services.png')}/>
            <p>Our services</p>
          </div>
        </Link>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">
          <div className='flex justify-between items-center'>
            <img className='w-6 mx-2' src={require('../../images/icons/contactus.png')}/>
            <p>Contact us</p>
          </div>
        </Link>
        <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">
        <div className='flex justify-between items-center'>
            <img className='w-6 mx-2' src={require('../../images/icons/aboutus.png')}/>
            <p>About us</p>
          </div>        
        </Link>
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