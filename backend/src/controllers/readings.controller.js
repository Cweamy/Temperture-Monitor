const service = require('../services/readings.service');

exports.create = async (req, res) => {
  try {
    const reading = await service.addReading(req.body);
    res.status(201).json(reading);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.list = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || 100, 10);
    const data = await service.getReadings(limit);
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
