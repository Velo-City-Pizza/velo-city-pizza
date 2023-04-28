// Model for categories in /order page. Defines template for categories.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const category_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    selectionId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    itemList: {
        type: Array,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Category', category_schema)
