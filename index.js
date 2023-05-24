require('dotenv').config();
const express = require('express');
const cors = require('cors');

const recordRoutes = require('./src/routes/record.route');

const MqttService = require('./src/services/MqttService');

const ActionController = require('./src/controllers/ActionController');

const app = express();

app.use(cors());

app.use(express.json());

const mqttService = new MqttService();
mqttService.connect();

const actionController = new ActionController(mqttService);

app.get('/', (_, res) => {
  res.json(
    {
      success: true,
      message: 'Welcome to the main endpoint of Yuan Hidroponik'
    }
  );
});

app.get('/actions/ssr/:status', actionController.changeSsrState.bind(actionController));

app.use('/records', recordRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
})
