import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BASE_URL} from '../../../utils/constants';
import getSummaryDetails from '../../../utils/getSummaryDetails';
import {addcurrentDateSummary, removecurrentDateSummary} from '../../../store/currentDateSummarySlice';
import { useDispatch, useSelector } from 'react-redux';

const StaffCurrentSummary = () => {
  const standardservices = useSelector((store)=>store.ServiceList);
  const comboservices = useSelector((store)=>store.ComboServicesList);
  const [errmsg, seterrmsg]=useState('');
  const dispatch = useDispatch();
  const currentDateSummary = useSelector((store)=>store.currentDateSummary);  
  const detailedSummary = getSummaryDetails(currentDateSummary, standardservices, comboservices);  
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
  },[]);

  return (!detailedSummary?.standardServices && !detailedSummary?.comboServices)?
  <p className='text-center'>No jobs for today...😟 </p>:
  <div className="overflow-x-auto rounded-box border bg-base-200 h-full">      
      <div className="flex justify-between p-2 text-center text-lg bg-[#131a57] items-center">
          <p>Services summary</p>          
      </div>
      <div>        
        {
          (detailedSummary.standardServices || detailedSummary.comboServices) &&
          <div>
            <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Job selection</th>
              </tr>
            </thead>
            {/* head */}
            <tbody>            
            </tbody>
            </table>                  
            <div className="flex justify-between p-2 text-center text-sm bg-[#303635] text-[#f5f0f0] font-bold">
            <div>
              <p>services</p>
            </div>
            <div>
              <p>amount</p>
            </div>
            </div>
          </div>
        }
      </div>      
  </div>
}

export default StaffCurrentSummary