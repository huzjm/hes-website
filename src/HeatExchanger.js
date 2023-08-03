import React, { useState } from 'react';
import './HeatExchanger.css';
import './App.css';
const HeatExchanger = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="content">
    <div className="heat-exchanger">
      <div className="introduction">
        <h2>Heat Exchanger Introduction</h2>
        <p>
          This is the introduction to heat exchangers. It provides a brief overview
          of what heat exchangers are and their applications.
        </p>
        {!showDetails && (
          <button onClick={handleShowDetails}>Show More Details</button>
        )}
      </div>
      {showDetails && (
        <div className="detailed-info">
          <div className="back-button" onClick={handleHideDetails}>
            <span>&#8592; Back</span>
          </div>
          <h2>Shell and Tube Heat Exchanger</h2>
          <p>
            The shell and tube heat exchanger is a type of heat exchanger that is widely
            used in various industries. It consists of a shell (a large pressure vessel)
            with a bundle of tubes inside it. One fluid runs through the tubes, and the
            other fluid flows over the tubes to transfer heat between the two fluids.
          </p>
          <button onClick={handleHideDetails}>Show Less Details</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default HeatExchanger;