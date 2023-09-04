import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="counter-text">Count: {count}</p>
      <div className="button-container">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
