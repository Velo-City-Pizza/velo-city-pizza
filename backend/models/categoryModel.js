// Model for categories in /order page. Defines template for categories.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    item_list: {
        type: Array,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Category', category_schema)