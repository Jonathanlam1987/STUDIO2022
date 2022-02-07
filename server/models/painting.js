const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: 'this field is required'
    },
    price:{
        type: Number,
        required: 'this field is required'
    },
    size:{
        type: String,
        enum: [ '5 x 7 inch', '8 x 8 inch', '8 x 10 inch', '11 x 11 inch'],
        required: 'this field is required'
    },
    imageURL:{
        type: String,
        required: 'this field is required'
    }
})

module.exports = mongoose.model('Painting', paintingSchema);