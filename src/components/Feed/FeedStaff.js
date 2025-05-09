import axios from 'axios'
import React, { useEffect } from 'react'
import {BASE_URL} from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addtodaysummary } from '../../store/todaysummarySlice';
import {addServiceList, removeServiceList} from '../../store/serviceListSlice'
import {addComboServiceList, removeComboServiceList} from '../../store/comboServicesSlice'
import StaffComboServices from '../Feed/staffServicesAndSummaries/StaffComboServices';
import StaffCurrentSummary from '../Feed/staffServicesAndSummaries/StaffCurrentSummary';
import StaffStandardServices from '../Feed/staffServicesAndSummaries/StaffStandardServices';
import getTotalServicesAndRespectiveAmountForStandardServices from '../../utils/getTotalServicesAndCountForStandardServices'
import getTotalServicesAndRespectiveAmountForComboServices from '../../utils/getTotalServicesAndCountForComboServices'
const FeedStaff = () => {
  const staff = useSelector((store)=>store.staff);
  const standardservices = useSelector((store)=>store.ServiceList);
  const comboservices = useSelector((store)=>store.ComboServicesList);
  const myaddRemoveStandardServices = useSelector((store)=>store.addRemoveStandardServices);
  const mystdserviceinfo = getTotalServicesAndRespectiveAmountForStandardServices(myaddRemoveStandardServices.serviceItems, standardservices);

  const myaddRemoveComboServices = useSelector((store)=>store.addRemoveComboServices);
  const mycomboserviceinfo = getTotalServicesAndRespectiveAmountForComboServices(myaddRemoveComboServices.serviceItems, comboservices);
  const dispatchtodaysummary = useDispatch();
  const dispatchStandardServices = useDispatch();  
  const fetchtodaysSummary=async()=>{
    const result = await axios.get(BASE_URL + '/staff/summary/today',{withCredentials:true});
    dispatchtodaysummary(addtodaysummary(result?.data?.data));
  };
  const fetchStandardServicesComboServices=async()=>{
    const result = await axios.get(BASE_URL + '/staff/feed',{withCredentials:true});
    dispatchStandardServices(addServiceList(result?.data?.data.servcieslist));
    dispatchStandardServices(addComboServiceList(result?.data?.data.comboserviceslist));
  };
  useEffect(()=>{
    fetchStandardServicesComboServices();
    fetchtodaysSummary();
  },[])
  return (
    <div className='flex flex-col m-5 p-5 shadow-2xl mx-auto'>
      <div className='flex justify-start items-center'>
        <p className=''>Welcome, <span className='text-2xl font-semibold text-purple-800 italic'>{staff.firstName} {staff.lastName}</span></p>
      </div>
      {/**services, combo & summary */}
      <div className='md:flex justify-center items-center m-2'>

        <div>
          <div className='md:flex justify-around items-stretch p-2 rounded-lg w-full'>
              {/**services */}
              <div className='w-full'>
                <StaffStandardServices/>
              </div>
              {/**services */}

              {/**combo services */}
              <div className='w-full'>
              <StaffComboServices/>
              </div>
              {/**combo services */}
          </div>        
          <div className="flex justify-between p-2 text-center text-lg bg-[#757959] text-[#f5f0f0] m-2 rounded-md">
            <p>Total services: {myaddRemoveStandardServices?.serviceItems?.length + myaddRemoveComboServices?.serviceItems?.length}</p>
            <p>Total Amount: {mystdserviceinfo?.amount + mycomboserviceinfo?.amount}</p>
          </div>
      </div>

        {/**summary */}
        <div className='md:flex justify-center items-center border border-gray-400 p-2 m-1 rounded-lg w-[30%]'>
        <StaffCurrentSummary/>
        </div>
        {/**summary */}
      </div>
      {/**services, combo & summary */}
    </div>
  )
}

export default FeedStaff