// Model for pizza category items.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modifierList: {
        type: Array,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Item', itemSchema)
