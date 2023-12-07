require('dotenv').config();
// require('dotenv'): Imports the 'dotenv' module in a Node.js application.
// .config(): Invokes the config function from the 'dotenv' module.
// .env created for ignore from the git it is a npm module
const express = require('express');
// const express: Declares a constant variable named 'express'.
//  require('express'): Assigns the 'express' module to the variable, making Express functionalities available for use.
const mongoose = require('mongoose');
// const mongoose: Declares a constant variable named 'mongoose'.
// = require('mongoose'): Assigns the 'mongoose' module to the variable, allowing the use of Mongoose, an Object Data Modeling (ODM) library for MongoDB.
const mongoString = process.env.DATABASE_URL;

// const mongoString: Declares a constant variable named 'mongoString'.
// = process.env.DATABASE_URL;: Assigns the value of the 'DATABASE_URL' environment variable to the 'mongoString' variable.

mongoose.connect(mongoString);
// mongoose.connect: Calls the connect method provided by the Mongoose library.
// (mongoString): Passes the MongoDB connection string, stored in the variable 'mongoString', as an argument to the connect method.
const database = mongoose.connection;
// Declares a constant variable named 'database'.
// mongoose.connection: Refers to the connection object provided by the Mongoose library
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