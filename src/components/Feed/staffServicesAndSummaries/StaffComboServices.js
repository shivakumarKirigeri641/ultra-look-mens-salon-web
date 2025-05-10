import { useDispatch, useSelector } from 'react-redux';
import NumberInputComboJob from '../../customComponents/NumberInputComboJob';
import getTotalServicesAndRespectiveAmountForComboServices from '../../../utils/getTotalServicesAndCountForComboServices';
import {clearComboService} from '../../../store/addRemoveComboServicesSlice';
import { useState } from 'react';

const StaffComboServices = () => {
  const [reloadkey, setreloadkey] = useState(0);
  const comboservices = useSelector((store)=>store.ComboServicesList);
  const dispatch=useDispatch();
  const myaddRemoveComboServices = useSelector((store)=>store.addRemoveComboServices);
  const serviceinfo = getTotalServicesAndRespectiveAmountForComboServices(myaddRemoveComboServices.serviceItems, comboservices);
  const clearServices = ()=>{
    dispatch(clearComboService());
    setreloadkey(prev => prev + 1);
  };
  return (
    <div className="overflow-x-auto rounded-box border bg-base-200 mx-2 h-full">
      <div className="flex justify-between p-2 text-center text-lg bg-[#131a57] items-center">
          <div className='flex justify-between'>
            <img className='w-6' src={require('../../../images/icons/combo.png')}></img>
            <span>Combo services</span>
          </div>
          <div className='tooltip' datatip='hello'>
            <button className='btn btn-outline' onClick={clearServices}>
              <div className='flex justify-between items-center'>
                <img className='w-6' src={require('../../../images/icons/clear.png')}></img>
                <p className='ml-2'>Clear</p>
              </div>
            </button>
          </div>
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
                  <NumberInputComboJob key={reloadkey} jobinfo={x} serviceinfo={serviceinfo}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="flex justify-between p-2 text-center text-sm bg-[#303635] text-[#f5f0f0] font-bold">
          <div>
            <p className='px-3'>Services:<span  className='font-bold'>{myaddRemoveComboServices?.serviceItems?.length}</span></p>
          </div>
          <div>
            <p className='px-3'>Amount:<span  className='font-bold'>Rs. {serviceinfo.amount}</span></p>
          </div>
      </div>
    </div>
  )
}

export default StaffComboServices