import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import {BASE_URL} from '../../utils/constants';
import {removeStaff} from '../../store/staffSlice';
import { useDispatch } from 'react-redux';
const MenuBarStaff = () => {
  const dispatchStaff = useDispatch();
  const navigate = useNavigate();
  const handleLogout=async()=>{
    const result = await axios.post(BASE_URL + '/staff/logout',{},{withCredentials:true});
    dispatchStaff(removeStaff());
    navigate('/stafflogout');
    
  }
  return (
    <div className='hidden md:flex justify-center items-center bg-blue-200 p-2 text-[16px]'>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Dashboard</Link>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">My jobs</Link>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Statistics</Link>
      <Link className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' to="/">Profile</Link>
      <button className='p-2 hover:font-semibold transition-all duration-200 ease-in-out' onClick={()=>{
        handleLogout();
      }}>Log out</button>
    </div>
  )
}

export default MenuBarStaff