import React, { useState } from 'react';

const HeatExchanger = () => {
  const [selectedType, setSelectedType] = useState('Shell and Tube');

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="content">
      <h1>Heat Exchangers</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sapien et justo
        consectetur accumsan at quis felis. Phasellus vel orci in massa malesuada feugiat.
      </p>
      <div>
        <h3>Select Heat Exchanger Type:</h3>
        <button
          onClick={() => handleTypeChange('Shell and Tube')}
          className={selectedType === 'Shell and Tube' ? 'active' : ''}
        >
          Shell and Tube
        </button>
        <button
          onClick={() => handleTypeChange('Radiators')}
          className={selectedType === 'Radiators' ? 'active' : ''}
        >
          Radiators
        </button>
        {/* Add more buttons for different heat exchanger types */}
      </div>
      {/* Render the content for the selected heat exchanger type */}
      {selectedType === 'Shell and Tube' && (
        <div>
          <h2>Shell and Tube Heat Exchangers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sapien et justo
            consectetur accumsan at quis felis. Phasellus vel orci in massa malesuada feugiat.
          </p>
        </div>
      )}
      {selectedType === 'Radiators' && (
        <div>
          <h2>Radiators</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sapien et justo
            consectetur accumsan at quis felis. Phasellus vel orci in massa malesuada feugiat.
          </p>
        </div>
      )}
      {/* Add more content for other heat exchanger types */}
    </div>
  );
};

export default HeatExchanger;
