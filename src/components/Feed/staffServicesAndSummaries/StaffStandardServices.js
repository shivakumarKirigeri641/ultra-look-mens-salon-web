import React, { useState } from 'react'
import {addStandardService, removeStandardService} from '../../../store/addRemoveStandardServicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import getTotalServicesAndRespectiveAmountForStandardServices from '../../../utils/getTotalServicesAndCountForStandardServices';
const StaffStandardServices = () => {
  let calcresult = null;
  const [totalServices, setTotalServices]=useState(0);
  const [totalAmount, settotalAmount]=useState(0);
  const servcieslist = useSelector((store)=>store.ServiceList);
  const addremoveservices = useSelector((store)=>store.addRemoveStandardServices);
  const dispatchaddremoveservices= useDispatch();
  const getServicecount=(serviceInfo)=>{
    let length=0;
    addremoveservices.serviceItems.forEach(x => {
            if(x.toString() === serviceInfo._id.toString()){
              length++;
            }
    });
    return length;
  }
  const updateServicecount=(serviceInfo)=>{    
    dispatchaddremoveservices(addStandardService(serviceInfo._id));
    //console.log(addremoveservices.serviceItems);
    //calcresult = getTotalServicesAndRespectiveAmountForStandardServices(addremoveservices, servcieslist);    
    //console.log(calcresult);
    //settotalAmount(calcresult.amount);
  }
  const removeServicecount=(serviceInfo)=>{    
    dispatchaddremoveservices(removeStandardService(serviceInfo._id));
    calcresult = getTotalServicesAndRespectiveAmountForStandardServices(addremoveservices, servcieslist);
    //console.log('calcresult', calcresult);
    //settotalAmount(calcresult.amount);
  }
  return (
    <div className='flex flex-col border border-slate-300 rounded-md'>
      <div className='p-2 bg-cyan-200 text-center font-bold italic'>
        <p>Standard services</p>
      </div>
      <ul className='flex flex-col'>
          {
            servcieslist?.map(x=>(
              <li key={x._id} className='p-1 text-sm'>
                <div className='flex justify-between items-center'>
                  <p className='w-[45%] text-nowrap'>{x.serviceName}</p>
                  <p className=''>Rs.{Math.round(x.price)}.00</p>
                  {/**buttons */}
                  <div className='w-20 border border-slate-400 p-1 rounded-full text-center bg-blue-200  text-gray-700 font-semibold'>
                    {
                      0 === getServicecount(x)?
                      <div className='cursor-pointer p-1' onClick={()=>{
                        updateServicecount(x);
                      }}>
                        Add job
                      </div>:                      
                      <div className='flex justify-between p-1'>
                        <img className='w-3 cursor-pointer' src={require('../../../images/icons/addservice.png')} alt='addservice' onClick={()=>{
                          updateServicecount(x);
                        }}></img>
                        <p className='text-black px-3 rounded-full bg-white'>{getServicecount(x)}</p>
                        <img className='w-3 cursor-pointer' src={require('../../../images/icons/removeservice.png')} alt='addservice' onClick={()=>{
                          removeServicecount(x);
                        }}></img>
                      </div>
                    }
                  </div>
                  {/**buttons */}         
                </div>
              </li>
            ))
          }
      </ul>
      <div className='flex justify-between items-center p-2 bg-slate-300 text-center font-bold italic'>
        <p>Services: {totalServices}</p>
        <p>Total payment: {totalAmount}</p>
      </div>
    </div>
  )
}

export default StaffStandardServices