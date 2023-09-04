import React, { useState } from 'react'
import Eventhandling_callback from './Eventhandling_callback';

function HandleIncrementCallback() {
    const [parentCounter, setParentCounter] = useState(0);

    const handleIncrementCallback = (updatedCount) => {
        setParentCounter(updatedCount);
        console.log(`Counter is incremented to ${updatedCount}`);

    };

    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Center vertically in viewport
    };
    return (
        <div style={centerStyle}>
            <div className="App">
                <Eventhandling_callback onIncrement={handleIncrementCallback} />
                <p>Parent Counter Value: {parentCounter}</p>
            </div>
        </div>
    )
}

export default HandleIncrementCallback