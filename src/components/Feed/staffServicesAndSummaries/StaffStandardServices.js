import React, { useState } from 'react';
import NumberInput from '../../customComponents/NumberInput';
import { useSelector } from 'react-redux';
const StaffStandardServices = () => {
  const standardservices = useSelector((store)=>store.ServiceList);
  //const addRemoveStandardServices = useSelector((store)=>store.addRemoveStandardServices);
  //console.log(addRemoveStandardServices.serviceItems);
  return (
    <div className="overflow-x-auto rounded-box border bg-base-200">
      <div className="p-2 text-center text-lg bg-blue-700">
          <span>Standard services</span>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Job selection</th>
          </tr>
        </thead>
        <tbody>
          {
            standardservices?.map(x=>(
              <tr key={x._id} className='font-mono'>
                <td>{x.serviceName}</td>
                <td className='font-bold'>Rs. {Math.round(x.price)}</td>                
                <td>
                  <NumberInput serviceInfo={x}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default StaffStandardServices