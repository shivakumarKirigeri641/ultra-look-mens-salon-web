import React, { useState } from 'react';

const NumberInputComboJob = ({jobinfo}) => {
  const [count, setCount] = useState(0);

  const decrement = () => 
    {
      setCount(prev => Math.max(0, prev - 1));
    }
  const increment = () => 
    {
      console.log(jobinfo._id);
      setCount(prev => prev + 1);
    }

  return (
    <div className="flex items-center space-x-2">
      <button className="btn btn-sm btn-outline" onClick={decrement}>-</button>
      <span className="text-lg w-8 text-center">{count}</span>
      <button className="btn btn-sm btn-outline" onClick={increment}>+</button>
    </div>
  );
};

export default NumberInputComboJob;