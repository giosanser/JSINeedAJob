// import mongoose
const mongoose = require('mongoose')

// define schema for a employer

var employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Employer name is required'
    },
    region: {
        type: String,
        required: 'Region name is required'
    },
    description: {
        type: String,
        required: 'Description is required'
    },
})

//make public
module.exports = mongoose.model('Employer', employerSchema)