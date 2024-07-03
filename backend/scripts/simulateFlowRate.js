const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const simulateFlowRate = async () => {
  const level = Math.random() * 200; // Simulate a flow rate between 0 and 200
  try {
    const response = await axios.post('http://localhost:5000/api/flowrate/add', { level });
    console.log(`Simulated flow rate: ${level}`);
  } catch (error) {
    console.error('Error simulating flow rate:', error.message);
  }
};

setInterval(simulateFlowRate, 60000); // Simulate data every minute