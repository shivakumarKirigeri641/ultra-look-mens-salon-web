import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const StaffLogout = () => {
    const navigate = useNavigate();
    const staff = useSelector((store)=>store.staff);    
    useEffect(() => {
      if(!staff){
        navigate('/');
      }
      else{
        const timer = setTimeout(() => {
          navigate('/');
        }, 2000);    
        return () => clearTimeout(timer);
      }
      }, []);
    
  return (
    <div className='flex flex-col justify-center items-center m-5 text-green-600 text-xl font-semibold'>
      <p>✅ You have successfuly logged out. Thank you. </p>
      <p className='italic'>Navigating to to home automatically...</p>
    </div>
  )
}

export default StaffLogout