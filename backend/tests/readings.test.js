const service = require('../src/services/readings.service');

describe('readings.service', () => {
  test('rejects temperature out of range', async () => {
    await expect(
      service.addReading({ temperature: 1000, humidity: 50, pressure: 1000 })
    ).rejects.toThrow('Temperature out of range');
  });
});
