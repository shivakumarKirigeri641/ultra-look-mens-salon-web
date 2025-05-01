import axios from 'axios'
import React, { useEffect } from 'react'
import {BASE_URL} from '../../utils/constants';
import { useDispatch } from 'react-redux';
import {addServiceList} from '../../store/serviceListSlice';
const FeedStaff = () => {
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
    <div>FeedStaff</div>
  )
}

export default FeedStaff