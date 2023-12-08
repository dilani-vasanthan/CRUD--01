const mongoose = require('mongoose');
// const mongoose
// This line imports the Mongoose library into your script and assigns it to a constant variable named mongoose
// require('mongoose');
// require is a function in Node.js used to include external modules or libraries. In this case, 
// it's importing the 'mongoose' module, which is a popular library for MongoDB interactions in Node.js.

const dataSchema = new mongoose.Schema({
    // This line declares a constant variable named dataSchema and assigns it the result of calling new mongoose.
    // Schema({. It's creating a new instance of the Schema class provided by the Mongoose library.
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)

// module.exports is used to export a module from a file.module means like node js module
//  This code is typically found in a file that defines a Mongoose model for MongoDB.


// A database schema defines how data is organized within a relational database