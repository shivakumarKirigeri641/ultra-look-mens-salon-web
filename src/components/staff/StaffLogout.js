import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {removeStaff} from '../../store/staffSlice';
import { useDispatch } from 'react-redux';
import { clearStandardService } from '../../store/addRemoveStandardServicesSlice';
import { useNavigate } from 'react-router';

const StaffLogout = () => {
    const dispatchStaff = useDispatch();
    const dispatchclearaddremoveservices = useDispatch();
    const navigate = useNavigate();
    const staff = useSelector((store)=>store.staff);    
    useEffect(() => {
      if(!staff){
        navigate('/');
      }
      else{
        dispatchStaff(removeStaff());
        dispatchclearaddremoveservices(clearStandardService());
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