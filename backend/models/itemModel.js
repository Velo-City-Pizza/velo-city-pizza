// Model for pizza category items.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    // variations: {
    //     type: Array,
    //     required: false
    // },
    categories: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
        required: true
    }
    // description: {
    //     type: String,
    //     required: false
    // },
    // modifierList: {
    //     type: Array,
    //     required: false
    // }
}, {timestamps: true})

module.exports = mongoose.model('Item', itemSchema)
