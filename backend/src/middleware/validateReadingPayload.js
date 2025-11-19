function validateReadingPayload(req, res, next) {
  const { temperature, humidity, pressure, device_id } = req.body || {};

  if (typeof temperature !== 'number') {
    return res.status(400).json({ message: 'temperature must be number' });
  }

  if (humidity != null && typeof humidity !== 'number') {
    return res.status(400).json({ message: 'humidity must be number' });
  }

  if (pressure != null && typeof pressure !== 'number') {
    return res.status(400).json({ message: 'pressure must be number' });
  }

  req.reading = {
    device_id: device_id || null,
    temperature,
    humidity,
    pressure
  };

  next();
}

module.exports = validateReadingPayload;
