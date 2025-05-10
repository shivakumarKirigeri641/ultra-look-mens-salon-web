import React, { useState } from 'react'
import {BASE_URL} from '../../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addStaff} from '../../store/staffSlice';
import { useNavigate } from 'react-router';
const StaffLogin = () => {
  const [isLogin, setisLogin]=useState(true);
    const navigate = useNavigate();
    const [email, setemail] = useState('shiva@gmail.com');  
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [errorMsg, seterrorMsg] = useState('');
    const [password, setpassword] = useState('Shiva@123')
    const dispatchStaff = useDispatch();
    const handleLoginSignupClick=async ()=>{
      try{
          seterrorMsg('');
          if(isLogin){
          if(!email || !password){
            throw new Error('Invalid input!')
          }  
          const result = await axios.post(BASE_URL + '/staff/login', {email, password}, {withCredentials:true});
          dispatchStaff(addStaff(result?.data?.data));
          navigate('/');
        }
        else{
          //sign up
          if(!firstName || lastName || !email || !password){
            throw new Error('Invalid input!')
          }
          const result = await axios.post(BASE_URL + '/staff/signup', {firstName, lastName, email, password}, {withCredentials:true});
          navigate('/staffsignupsuccessful');
        }
      }
      catch(err){
      seterrorMsg(err.message);  
      }
  }
  return (
    <div className='mx-auto sm:w-[30%] text-center'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend text-3xl">{isLogin && (<p>Login</p>)}
      {!isLogin && (<p>Sign up</p>)}</legend>

      {!isLogin && <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border">
        <label className="label">First Name</label>
        <input type="text" className="input w-full" placeholder="first name"/>

        <label className="label">Last name</label>
        <input type="text" className="input w-full" placeholder="Last name" />
      </fieldset>}
      <label className="label">Email</label>
      <input type="email" className="input w-full" placeholder="Email"  value={email} onChange={(e)=>{
        setemail(e.target.value)
      }}/>

      <label className="label">Password</label>
      <input type="password" className="input w-full" placeholder="Password"  value={password} onChange={(e)=>{
        setpassword(e.target.value)
      }}/>

      {
        isLogin && <p className='text-[15px] m-1 text-blue-100 font-semibold italic text-left'>New staff? Sign-up <span className='underline font-bold cursor-pointer' onClick={()=>{
          setisLogin(false);
        }}>here</span></p>
      }
      {
        !isLogin && <p className='text-[15px] m-1 text-blue-100 font-semibold italic text-left'>Already a staff? Login <span className='underline font-bold cursor-pointer'  onClick={()=>{
          setisLogin(true);
        }}>here</span></p>
      }
      <button className="btn btn-neutral mt-4" onClick={()=>{
        handleLoginSignupClick();
      }}>{isLogin && (<p>Login</p>)}
      {!isLogin && (<p>Sign up</p>)}</button>
      <label className='text-red-700 font-bold italic animate-bounce text-left p-1 text-lg'>{errorMsg}</label>
    </fieldset>
    </div>    
  )
}

export default StaffLogin