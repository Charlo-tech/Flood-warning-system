const express = require('express');
const connectDB = require('./config/db');
const flowRateRoutes = require('./routes/flowRate');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
connectDB();

app.use(express.json());
app.use('/api/flowrate', flowRateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));