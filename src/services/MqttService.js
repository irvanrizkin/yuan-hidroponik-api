const mqtt = require('mqtt');
const { Record } = require('../models');

class MqttService {
  constructor() {
    this.mqttClient = null;
    this.host = process.env.MQTT_HOST;
  }

  connect() {
    this.mqttClient = mqtt.connect({
      host: this.host,
      port: 1883
    });

    this.mqttClient.on('connect', () => {
      console.log('mqtt connected');
    })

    this.mqttClient.subscribe(process.env.MQTT_TOPIC_RECORD);

    this.mqttClient.on('message', async (topic, message) => {
      const result = message.toString().split(';');
      await Record.create({
        ppm: result[0],
        temperature: result[1],
        source: 'mqtt',
      })
    });

    this.mqttClient.on('error', (error) => {
      console.log(error);
    })

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }
}

module.exports = MqttService;
