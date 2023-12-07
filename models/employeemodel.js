const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    EmployeeName: {
        required: true,
        type: String
    },
    Department: {
        required: true,
        type: String
    },
    Destination: {
        required: true,
        type: String
    },
    salary: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.employeemodel('Data', dataSchema)
