import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addComboService, removeComboService} from '../../store/addRemoveComboServicesSlice';
const NumberInputComboJob = ({jobinfo, serviceinfo}) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const decrement = () => 
    {
      setCount(prev => Math.max(0, prev - 1));
      dispatch(removeComboService(jobinfo._id));
    }
  const increment = () => 
    {
      console.log(jobinfo._id);
      setCount(prev => prev + 1);
      dispatch(addComboService(jobinfo._id));
    }

  return (
    <div className= {0 === count?"flex items-center space-x-2":"flex items-center space-x-2 bg-[#95adaf] text-black font-bold justify-between"}>
      <button className="btn btn-sm btn-secondary" onClick={decrement}>-</button>
      <span className="text-lg w-8 text-center">{count}</span>
      <button className="btn btn-sm btn-primary" onClick={increment}>+</button>
    </div>
  );
};

export default NumberInputComboJob;