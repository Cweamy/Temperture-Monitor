require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const readingsRoutes = require('./routes/readings.routes');
const { startMqtt } = require('./mqtt/client');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api/readings', readingsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'ESP Backend running' });
});

// Start server
const port = process.env.PORT || 7000;
app.listen(port, () => console.log('Backend listening on ' + port));

// Start MQTT Listener
startMqtt();
