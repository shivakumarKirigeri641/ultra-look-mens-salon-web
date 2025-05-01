import axios from 'axios'
import React, { useEffect } from 'react'
import {BASE_URL} from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addServiceList} from '../../store/serviceListSlice';
const FeedStaff = () => {
  const servicelist = useSelector((store)=>store.ServiceList?.servcieslist);
  const staff = useSelector((store)=>store.staff);
  console.log('list', servicelist);
  const dispatchStaff = useDispatch();
  const fetchServiceList=async()=>{
    const result = await axios.get(BASE_URL + '/staff/feed',{withCredentials:true});
    console.log(result?.data?.data);
    dispatchStaff(addServiceList(result?.data?.data));
  };
  useEffect(()=>{
    fetchServiceList();
  },[])
  return (
    <div className='flex flex-col m-5 p-5 border border-gray-300 rounded-md shadow-xl'>
      <div className='flex justify-start items-center'>
        <p className=''>Welcome, <span className='text-2xl font-semibold text-purple-800 italic'>{staff.firstName} {staff.lastName}</span></p>
      </div>
      {/**services& summary */}
      <div className='flex justify-around items-center'>
        {/**services */}
        <div className='m-5 border border-slate-400 rounded-md'>
          <p className='p-4 border rounded-md bg-gradient-to-b from-gray-100 to-gray-300 w-full'>Services</p>
          <div className='flex justify-around flex-wrap'>
            {
              servicelist?.map(x=><div key={x._id}>{
                <div className='flex flex-col w-80 border border-gray-300 rounded-md m-1 shadow-xl hover:translate-x-2 duration-200 ease-in-out cursor-pointer'>
                  <div className='flex justify-between items-center'>
                    <p className='py-2 pl-2 font-semibold'>{x.serviceName}</p>
                    <p className='py-2 pr-2 font-bold text-blue-800'>Rs. {x.price}</p>
                  </div>
                  <p className='text-center p-5'>Select to add</p>
                </div>
              }</div>)
            }
          </div>
        </div>
        {/**services */}

        {/**summary */}
        <div>
          summary
        </div>
        {/**summary */}
      </div>
      {/**services& summary */}
    </div>
  )
}

export default FeedStaff