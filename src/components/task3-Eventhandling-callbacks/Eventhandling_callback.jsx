import React, { useState } from 'react';

function EventhandlingCallback(props) {
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Function to call the parent component
  const handleIncrement = () => {
    const updatedCount = count + 1;
    // setCount(updatedCount);
    props.onIncrement(updatedCount);
    // props.onIncrement(count + 1);
  };

  // Define inline styles
  const containerStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Counter Value: {count}</h1>
      <button style={buttonStyle} onClick={incrementCounter}>
        Increment Counter
      </button>
      <button style={buttonStyle} onClick={handleIncrement}>
        Call Parent
      </button>
    </div>
  );
}

export default EventhandlingCallback;
