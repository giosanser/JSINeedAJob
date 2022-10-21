// import mongoose
const mongoose = require('mongoose')

// define schema for a region

var regionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Region name is required'
    }
})

//make public
module.exports = mongoose.model('Region', regionSchema)