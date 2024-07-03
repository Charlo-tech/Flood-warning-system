const express = require('express');
const router = express.Router();
const FlowRate = require('../models/FlowRate');
const sendSMS = require('../services/africasTalking');

router.post('/add', async (req, res) => {
  const { level } = req.body;
  const flowRate = new FlowRate({ level });

  try {
    await flowRate.save();

    // Check for flood warning
    if (level > process.env.FLOOD_THRESHOLD) {
      sendSMS(process.env.ALERT_PHONE_NUMBER, `Flood alert! Water level: ${level}`);
    }

    res.status(201).json({ message: 'Flow rate added', flowRate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const flowRates = await FlowRate.find().sort({ timestamp: -1 }).limit(10);
    res.json(flowRates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;