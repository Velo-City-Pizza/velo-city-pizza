// All functional behavior for category model. Called from order.js.
// Most (if not all) functions are async. Ask me if you don't know what that is in this context

const Category = require('../models/categoryModel');

// GET all categories
const getCategories = async (req, res) => {
    const categories = await Category.find({}).sort({createdAt: -1});
    // ^ Sorted by date created. Change sort function if desired

    res.status(200).json(categories);
}

// GET a single category
const getCategoryById = async (req, res) => {
    const {id} = req.params;
    const category = await Category.findById(id);
    
    if (!category) {
        return res.status(404).json({error: 'Given category does not exist'});
    }
    res.status(200).json(category);
}

// POST a new category
    // Async function, ask me if you don't know what that is
const createCategory = async (req, res) => {
    res.json({msg:'POST a new category'});
    // See ../models/categoryModel.js
    const {name, description, base_price, modifier_list} = req.body;
    try {
        const category = await Category.create({name, description, base_price, modifier_list});
        res.status(200).json(category);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

// UPDATE a category

// DELETE a category

module.exports = {
    createCategory
};