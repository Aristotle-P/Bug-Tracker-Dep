require('dotenv').config();
require('./db/db.js');
const express = require('express');

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(userRoutes);

app.listen(3000, console.log('server running on port 3000'));