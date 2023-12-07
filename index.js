require('dotenv').config();
// A dotenv module allows you to load environment variables from a .env file.
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})

// 
// const routes = require('./routes/routes');
const routes = require('./routes/routes');

app.use('/api', routes)