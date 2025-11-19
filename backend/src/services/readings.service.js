const repo = require('../repositories/readings.repository');

exports.addReading = async (data) => {
  if (data.temperature < -50 || data.temperature > 150)
    throw new Error('Temperature out of range');

  return await repo.insert(data);
};

exports.getReadings = async (limit) => {
  return await repo.findMany(limit);
};
