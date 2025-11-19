const mqtt = require('mqtt');
const readingsService = require('../services/readings.service');
require('dotenv').config();

exports.startMqtt = () => {
    const url = process.env.MQTT_URL;
    const topic = process.env.MQTT_TOPIC;

    const client = mqtt.connect(url, {
        reconnectPeriod: 2000
    });

    client.on('connect', () => {
        console.log('MQTT connected:', url);
        client.subscribe(topic);
    });

    client.on('message', async (t, msg) => {
        try {
            const obj = JSON.parse(msg.toString());

            const reading = {
                temperature: obj.temperature,
                humidity: obj.humidity,
                pressure: obj.pressure,
                device_id: obj.device_id || null
            };

            await readingsService.addReading(reading);
            console.log('MQTT saved:', reading);

        } catch (e) {
            console.error('MQTT JSON error:', e.message);
        }
    });

    client.on('error', (e) => {
        console.log('MQTT error:', e.message);
    });
};
