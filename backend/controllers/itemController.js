// All functional behavior for category model. Called from order.js.
// Most (if not all) functions are async. Ask me if you don't know what that is in this context

const Item = require('../models/itemModel')
const Category = require('../models/categoryModel')
const SquareTools = require('../square_tools/catalog')
const mongoose = require('mongoose')

// GET all items in a category
const listCategoryItems = async (req, res) => {
    const { category } = req.body
    const items = await Item.find({}).sort({ createdAt: -1 })
    // ^ Sorted by date created. Change sort function if desired

    res.status(200).json(items)
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
/**
 * @sideEffect Deletes old category entries with a matching "name" attribute
 * @sideEffect Attaches a reference to the given category
 */
const createItem = async (req, res) => {
    // See ../models/categoryModel.js
    const { name, selectionId, baseprice, description } = req.body
    debug.log(req.body)
    const { status, jsonMsg } = await postItem(name, selectionId, description, baseprice)
    debug.log(status, jsonMsg)
    return res.status(status).json(jsonMsg)
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
    customAttrPairs = await SquareTools.retrieveCustomAttrs()
    // categoryNameIdPairs = await SquareTools.retrieveCategories()

    debug.log(customAttrPairs)
    if (customAttrPairs === null) {
        return res.status(400).json({error: 'Square retrieval failed'})
    }

    var ret = {}
    for (const category of customAttrPairs.reverse()) {
        let postResult = await postCategory(category.name, 'test description', category.selectionId)
        if (postResult.status !== 200) {
            return res.status(postResult.status).json(postResult.jsonMsg)
        }
        Object.assign(ret, postResult)
    }
    return res.status(200).json(customAttrPairs)
}

// ------------------- Helpers -------------------------

/**
 * Post an item to a specified category selection ID 
 * @returns {Object} status: 200 or 400, jsonMsg: created item or error
 * @sideEffect Deletes old item entries with a matching "name" attribute
 * @sideEffect Attaches a reference to the given category document
 */
async function postItem(name, categorySelectionId, description="", baseprice=0) {
    try {
        // Delete old entries with matching names
        const deleteResult = await Item.deleteMany({ name })
        console.log("Deleted documents =>", deleteResult)
        
        // Retrieve parent category
        var parentCategory = await Category.findOne({ selectionId: categorySelectionId })
        if (parentCategory == null) {
            return { status: 404, jsonMsg: 'itemController.postItem: parent category not found' }
        }
        // Create item with reference to parent
        debug.log({ name, description, baseprice, category: parentCategory._id})
        var item = await Item.create({ name, description, baseprice, category: parentCategory._id })
        parentCategory.itemList.addToSet(item._id)
        await parentCategory.save()
        return { status: 200, jsonMsg: { item, deleteResult } }
    }
    catch (error) {
        return { status: 400, jsonMsg: { error: `itemController.postItem: ${error.message}` } }
    }
}

module.exports = {
    listCategoryItems,
    createItem
}