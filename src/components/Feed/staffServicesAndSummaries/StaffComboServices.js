import React from 'react'
import { useSelector } from 'react-redux';
import NumberInput from '../../customComponents/NumberInput';

const StaffComboServices = () => {
  const comboservices = useSelector((store)=>store.ComboServicesList);
  return (
    <div className="overflow-x-auto rounded-box border bg-base-200 mx-2">
      <div className="p-2 text-center text-lg bg-blue-700">
          <span>Combo services</span>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Combo name</th>
            <th>Price</th>
            <th>Job selection</th>
          </tr>
        </thead>
        <tbody>
          {
            comboservices?.map(x=>(
              <tr key={x._id} className=''>
                <td>{x.comboName}</td>
                <td>Rs. {Math.round(x.price)}</td>
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

export default StaffComboServices