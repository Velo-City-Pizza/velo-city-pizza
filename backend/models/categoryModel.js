// Model for categories in /order page. Defines template for categories.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
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
    itemList:{
        type: [{
            type: String,
            ref: 'Item'
        }],
        validate: v => Array.isArray(v)
    },
    customAttrId: String
}, {timestamps: true})

module.exports = mongoose.model('Category', categorySchema)
