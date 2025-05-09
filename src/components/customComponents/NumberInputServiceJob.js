import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addStandardService, removeStandardService} from '../../store/addRemoveStandardServicesSlice';
const NumberInputServiceJob = ({jobinfo}) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const decrement = () => 
    {
      setCount(prev => Math.max(0, prev - 1));
      dispatch(removeStandardService(jobinfo._id));
    }
  const increment = () => 
    {
      setCount(prev => prev + 1);
      dispatch(addStandardService(jobinfo._id));
    }
  return (
    <div className= {0 === count?"flex items-center space-x-2":"flex items-center space-x-2 bg-[#95adaf] text-black font-bold"}>
      <button className="btn btn-sm btn-secondary" onClick={decrement}>-</button>
      <span className="text-lg w-8 text-center">{count}</span>
      <button className="btn btn-sm btn-primary" onClick={increment}>+</button>
    </div>
  );
};

export default NumberInputServiceJob;