const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required'
    },
    Description: {
        type: String,
        required: 'this field is required'
    },
    size:{
        type: String,
        enum: [ '5" x 7"', '8" x 8"', '8" x 8"', '11" x 11"'],
        required: 'this field is required'
    },
    image:{
        type: String,
        required: 'this field is required'
    }
})

module.exports = mongoose.model('Painting', paintingSchema);