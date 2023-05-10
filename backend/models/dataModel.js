// Model for pizza category items.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Data', dataSchema)
