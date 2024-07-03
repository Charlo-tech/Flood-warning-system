const mongoose = require('mongoose');
const FlowRateSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  level: { type: Number, required: true },
});
module.exports = mongoose.model('FlowRate', FlowRateSchema);