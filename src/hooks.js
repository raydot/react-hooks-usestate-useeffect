import React, { useState } from 'react';

export const CounterDemo = () => {
  // syntax useCounter(start, finish, step)
  const [count, handleCount] = useCounter(100, 130, 5);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>Count</button>
    </div>
  );
};

const useCounter = (start, finish, step) => {
  // definition of state

  const [count, setCount] = useState(start);

  // Implementation of handleCount()

  const handleCount = () => {
    if (count === finish) {
      return setCount(start);
    } else {
      return setCount(count + step);
    }
  };

  // Return our custom hook array
  return [count, handleCount];
};
