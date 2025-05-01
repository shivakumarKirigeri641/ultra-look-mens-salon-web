import React, { useState } from 'react'
import {BASE_URL} from '../../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addStaff} from '../../store/staffSlice';
import { useNavigate } from 'react-router';
const StaffLoginBigScreen = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState('shiva@gmail.com');  
  const [errorMsg, seterrorMsg] = useState('');
  const [password, setpassword] = useState('Shiva@123')
  const dispatchStaff = useDispatch();
  const handleLoginClick=async ()=>{
try{
  seterrorMsg('');
  const result = await axios.post(BASE_URL + '/staff/login', {email, password}, {withCredentials:true});
  console.log(result?.data?.data);
  dispatchStaff(addStaff(result?.data?.data));
  navigate('/');
}
catch(err){
seterrorMsg(err.message);  
}
  }
  return (
    <div className='flex flex-col mx-auto w-[28%] border border-gray-300 p-2 rounded-xl shadow-xl bg-gradient-to-b from-[#9fe6f3] to-[#46b6be]'>
      <div className='flex justify-center text-5xl text-blue-500 font-semibold p-2 border-b-2 border-gray-200'>
        <p>Staff login</p>
      </div>
      <div className='flex justify-center'>
        <img className='cover text-center' src={require('../../images/icons/login (2).png')}></img>        
      </div>
      
      <div className='relative p-2'>
        <input className='pl-10 border bg-slate-100 outline-none hover:bg-yellow-100 border-gray-400 w-full rounded-md text-gray-500 p-2' type='text' placeholder='Email' value={email} autoFocus
        onChange={(e)=>{
          setemail(e.target.value)
        }}/>
        <img className='absolute top-3 left-3 w-8' src={require('../../images/icons/login (2).png')}></img>
      </div>

      <div className='relative p-2'>
        <input className='pl-10 border outline-none bg-slate-100 hover:bg-yellow-100 border-gray-400 w-full rounded-md text-gray-500 p-2' type='password' placeholder='Password' value={password}
        onChange={(e)=>{
          setpassword(e.target.value)
        }}/>
        <img className='absolute top-3 left-3 w-8' src={require('../../images/icons/login (2).png')}></img>
      </div>

      <div className='mx-3 text-blue-800 font-semibold py-2'>
        <p>New staff? Create an account <span className='italic underline'>here</span></p>
      </div>

      <button className='p-5 bg-[#6b69e9] text-white rounded-lg text-xl font-semibold hover:font-bold mx-2'
      onClick={()=>{
        handleLoginClick();
      }}>Login</button>
      <p className='m-2 text-red-600 font-bold animate-bounce'>{errorMsg}</p>
    </div>
  )
}

export default StaffLoginBigScreen