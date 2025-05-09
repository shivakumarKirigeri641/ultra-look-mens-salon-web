import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addStandardService, removeStandardService} from '../../store/addRemoveStandardServicesSlice';
const NumberInputServiceJob = ({jobinfo, serviceinfo}) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const decrement = () => 
    {
      setCount(prev => Math.max(0, prev - 1));
      dispatch(removeStandardService(jobinfo._id));
    }
  const increment = () => 
    {
      console.log(jobinfo._id);
      setCount(prev => prev + 1);
      dispatch(addStandardService(jobinfo._id));
    }

  return (
    <div className="flex items-center space-x-2">
      <button className="btn btn-sm btn-secondary" onClick={decrement}>-</button>
      <span className="text-lg w-8 text-center">{0 === serviceinfo.services?0:count}</span>
      <button className="btn btn-sm btn-primary" onClick={increment}>+</button>
    </div>
  );
};

export default NumberInputServiceJob;