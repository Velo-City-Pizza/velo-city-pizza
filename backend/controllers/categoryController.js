// All functional behavior for category model. Called from order.js.
// Most (if not all) functions are async. Ask me if you don't know what that is in this context

const Category = require('../models/categoryModel')
const SquareTools = require('../square_tools/categories')
const mongoose = require('mongoose')

// GET all categories
const getCategories = async (req, res) => {
    const categories = await Category.find({}).sort({createdAt: -1})
    // ^ Sorted by date created. Change sort function if desired

    res.status(200).json(categories)
}

// GET a single category
const getCategoryById = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such category'})
    }

    const category = await Category.findById(id)
    
    if (!category) {
        return res.status(404).json({error: 'Given category does not exist'})
    }
    res.status(200).json(category)
}

// POST a new category
    // Async function, ask me if you don't know what that is
const createCategory = async (req, res) => {
    // See ../models/categoryModel.js
    const {name, description, item_list} = req.body
    console.log(req.body)
    try {
        const category = await Category.create({name, description, item_list})
        res.status(200).json(category)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a category
const deleteCategory = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such category'})
    }

    const category = await Category.findOneAndDelete({_id: id})

    if (!category) {
        return res.status(400).json({error: 'Given category does not exist'})
    }

    res.status(200).json(category)
}

// UPDATE a category
const updateCategory = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such category'})
    }

    const category = await Category.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!category) {
        return res.status(400).json({error: 'No such category'})
    }

    res.status(200).json(category)
}

// UPDATE all categories (deletes old ones)
const updateAllCategories = async (req, res) => {
    await console.log(SquareTools.retrieveCategories())
    return;
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    deleteCategory,
    updateCategory,
    updateAllCategories
}