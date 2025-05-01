import React from 'react'
import { useNavigate } from 'react-router'

const StaffSignUpSuccessful = () => {  
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center m-5 text-green-600 text-xl font-semibold'>
    <p>✅ You have successfuly registered . Thank you. </p>
    <p className='italic'>Click <span className='cursor-pointer' onClick={()=>{
      navigate('/stafflogin');
    }}>here</span> to go back to login.</p>
  </div>
  )
}

export default StaffSignUpSuccessful