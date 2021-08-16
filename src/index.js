require('dotenv').config();
require('./db/db.js');
const express = require('express');

const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(userRoutes);
app.use(ticketRoutes);

app.listen(5000, console.log('server running on port 5000'));