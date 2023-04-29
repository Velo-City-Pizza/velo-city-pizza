// Model for pizza category items.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pizzaItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    selectionId: { // TODO: Might be required, fix later
        type: String,
        required: false
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

module.exports = mongoose.model('PizzaItem', pizzaItemSchema)
