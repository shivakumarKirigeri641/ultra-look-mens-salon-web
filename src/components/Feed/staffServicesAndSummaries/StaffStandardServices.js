import React from 'react'
import {addStandardService, removeStandardService} from '../../../store/addRemoveStandardServicesSlice';
import { useDispatch, useSelector } from 'react-redux';
const StaffStandardServices = () => {
  const servcieslist = useSelector((store)=>store.ServiceList);
  const addremoveservices = useSelector((store)=>store.addRemoveStandardServices);  
  console.log('adding serviceitems:', addremoveservices.serviceItems);
  const dispatchaddremoveservices= useDispatch();
  const getServicecount=(serviceInfo)=>{
    const data = addremoveservices.serviceItems.filter(x=>x.toString() === serviceInfo._id.toString()); 
    if(0 === data.length || !data){
      return 0;
    }
    else{
      return data.count;
    }
  }
  const updateServicecount=(serviceInfo)=>{    
    dispatchaddremoveservices(addStandardService(serviceInfo._id));
  }
  const removeServicecount=(serviceInfo)=>{    
    dispatchaddremoveservices(removeStandardService(serviceInfo._id));
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
                  <p className='w-[35%] text-nowrap'>{x.serviceName}</p>
                  <p className=''>{Math.round(x.price)}</p>
                  <button className='border border-slate-500 px-2 py-1 bg-blue-400 rounded-xl text-white font-semibold'>                    
                    {
                      0 === getServicecount(x)?
                      <div className='relative flex justify-between items-center' onClick={()=>{
                        updateServicecount(x);
                      }}>
                        Add job
                      </div>:
                      <div className='flex justify-center'>
                        <div className='relative flex justify-between items-center' onClick={()=>{
                          updateServicecount(x);
                        }}>
                          Add
                        </div>
                        <div className='relative flex justify-between items-center' onClick={()=>{
                          removeServicecount(x);
                        }}>
                          remove
                        </div>
                      </div>
                    }
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default StaffStandardServices