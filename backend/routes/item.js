// This is the Admin-only API for updating the items from Square catalog.
// Base URI is /admin/catalog/item [i.e, router.get('/id_here') actually routes to /admin/catalog/item/id_here]

const express = require('express')
const {
    listCategoryItems
} = require('../controllers/itemController')

const router = express.Router()
const cors = require('cors')

// GET (list) all items in a specified category
    // cors() enables cross-origin resource sharing for this request
    //  (makes it accessible by react app)
    // TODO: Figure out how to make this work with JWT
router.get('/', cors(), listCategoryItems)

/*
// GET a single category
router.get('/:id', getCategoryById)

// POST a new category
router.post('/', createCategory)

// DELETE a category
router.delete('/:id', deleteCategory)

// UPDATE a category
router.patch('/:id', updateCategory)

// UPDATE all categories (deletes old ones)
router.patch('/', updateAllCategories)

*/
module.exports = router