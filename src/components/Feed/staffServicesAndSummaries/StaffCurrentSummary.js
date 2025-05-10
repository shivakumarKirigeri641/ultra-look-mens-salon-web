import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BASE_URL} from '../../../utils/constants';
import getSummaryDetails from '../../../utils/getSummaryDetails';
import {addcurrentDateSummary, removecurrentDateSummary} from '../../../store/currentDateSummarySlice';
import { useDispatch, useSelector } from 'react-redux';

const StaffCurrentSummary = () => {
  const [errmsg, seterrmsg]=useState('');
  const dispatch = useDispatch();
  const currentDateSummary = useSelector((store)=>store.currentDateSummary);  
  const detailedSummary = getSummaryDetails(currentDateSummary);  
  const fetchCurrentDaySummary=async()=>{
    try{
      const result = await axios.get(BASE_URL + '/staff/summary/today',{withCredentials:true});
      dispatch(addcurrentDateSummary(result?.data?.data));
    }
    catch(err){
      seterrmsg(err.message);
    }
  }
  useEffect(()=>{
    fetchCurrentDaySummary();
  },[])
  return (
    <div className="overflow-x-auto rounded-box h-full w-full">
      <div className="flex justify-between p-2 text-center text-lg bg-[#131a57] items-center">
            <p>Service summary</p>        
      </div>
      <div>
        {
          (!currentDateSummary || 0 === currentDateSummary.length)  && (
            <div>
              There's no job for today. Start working....
            </div>
          )
        }
      </div>
      <div>{errmsg}</div>
    </div>    
  )
}

export default StaffCurrentSummary