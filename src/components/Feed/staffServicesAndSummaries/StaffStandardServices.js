import React, { useState } from 'react';
import NumberInputServiceJob from '../../customComponents/NumberInputServiceJob';
import getTotalServicesAndRespectiveAmountForStandardServices from '../../../utils/getTotalServicesAndCountForStandardServices';
import { useSelector } from 'react-redux';
const StaffStandardServices = () => {
  const standardservices = useSelector((store)=>store.ServiceList);
  const [totalservices, settotalservices] = useState(0);
  //const addRemoveStandardServices = useSelector((store)=>store.addRemoveStandardServices);
  //console.log(addRemoveStandardServices.serviceItems);
  const myaddRemoveStandardServices = useSelector((store)=>store.addRemoveStandardServices);
  const serviceinfo = getTotalServicesAndRespectiveAmountForStandardServices(myaddRemoveStandardServices.serviceItems, standardservices);
  console.log(serviceinfo);
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
                  <NumberInputServiceJob jobinfo={x}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="flex justify-between p-2 text-center text-lg bg-[#606d6a] text-[#f5f0f0]">
          <div>
            <p className='px-3'>Services:<span  className='font-bold'>{myaddRemoveStandardServices?.serviceItems?.length}</span></p>
          </div>
          <div>
            <p className='px-3'>Services:<span  className='font-bold'>Rs. {serviceinfo.amount}</span></p>
          </div>
      </div>
    </div>
  )
}

export default StaffStandardServices