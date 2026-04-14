import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Displaying the present state */}
      <h3>The current state is: {isOn ? "ON" : "OFF"}</h3>

      <button 
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: isOn ? '#4CAF50' : '#ccc'
        }}
      >
        Click to Toggle
      </button>
    </div>
  );
}

export default ToggleButton;
