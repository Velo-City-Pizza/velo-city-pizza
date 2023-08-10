// Model for pizza category items.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    variations: {
        type: Array,
        required: true
    },
    categories: {
        type: [Schema.Types.ObjectId],
        required: true
    },
    description: {
        type: String,
        required: false
    },
    modifierList: {
        type: Array,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Item', itemSchema)
