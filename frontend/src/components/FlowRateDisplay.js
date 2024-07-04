import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlowRateDisplay = () => {
  const [flowRates, setFlowRates] = useState([]);

  useEffect(() => {
    const fetchFlowRates = async () => {
      const res = await axios.get('http:localhost:5000/api/flowrate');
      setFlowRates(res.data);
    };
    fetchFlowRates();
  }, []);

  return (
    <div>
      <h1>Recent Flow Rates</h1>
      <ul>
        {flowRates.map(rate => (
          <li key={rate._id}>{rate.timestamp}: {rate.level}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlowRateDisplay;